import { RefObject, useState } from 'react';
import { useScroll } from '../../../lib/useScroll';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import { ProjectsQueryVariables } from '../../../graphql/projects/projects.generated';

import {
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa';

import {
  DescriptionStyles,
  LinksStyles,
  ProjectStyles,
} from './ProjectStyles';
import Modal from './modal/Modal';
import { useProjectsImagesLazyQuery } from '../../../graphql/projects/projectImages.generated';

interface IProjectProps {
  project: ProjectsQueryVariables;
  inView: boolean;
  projectRef: RefObject<HTMLDivElement>;
}

const Project = ({ project }: IProjectProps) => {
  const [showModal, setShowModal] = useState(false);

  const { setScrollWithModal } = useScroll();

  const { ref, inView } = useInView({
    threshold: 0.55,
    triggerOnce: true,
  });

  const [loadImages, { loading, data }] =
    useProjectsImagesLazyQuery({
      variables: {
        title: project?.attributes?.title,
      },
    });

  const toggleModal = () => {
    setShowModal(prev => !prev);
    setScrollWithModal(prev => !prev);
  };

  const imageUrl =
    project?.attributes?.main_image?.data?.attributes?.url;

  return (
    <ProjectStyles ref={ref} inView={inView}>
      <h3 className='project-title'>
        {project?.attributes?.title}
      </h3>

      <div className='project-body'>
        <section className='project-img'>
          <Image
            src={imageUrl}
            alt={project?.attributes?.title}
            // layout='fill'
            width={750}
            height={500}
            objectFit='contain'
            onClick={() => {
              toggleModal();
              loadImages();
            }}
          />
        </section>
        {imageUrl && (
          <DescriptionStyles inView={inView}>
            <h4 className='project-type'>
              {project?.attributes?.project_type}
            </h4>
            <p className='project-description'>
              {project?.attributes?.description}
            </p>
            <ul>
              {project?.attributes?.tech_used?.map(
                (tech: any) => (
                  <li key={tech.id}>{tech.tech_title}</li>
                )
              )}
            </ul>
          </DescriptionStyles>
        )}
        <LinksStyles>
          <a
            href={project?.attributes?.link}
            target='_blank'
            rel='noreferrer'
            data-tooltip={`Visit ${project?.attributes?.title}`}
          >
            <FaExternalLinkAlt />
          </a>
          <a
            href={project?.attributes?.link_git}
            target='_blank'
            rel='noreferrer'
            data-tooltip='Check source code'
          >
            <FaGithub />
          </a>
        </LinksStyles>
      </div>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        slides={data?.projects?.data[0].attributes}
        loading={loading}
      />
    </ProjectStyles>
  );
};

export default Project;
