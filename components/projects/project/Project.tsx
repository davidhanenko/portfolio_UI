import { RefObject, useState } from 'react';
import { useScroll } from '../../../lib/useScroll';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import {
  useProjectsImagesLazyQuery,
  useProjectsImagesQuery,
} from '../../../graphql/projects/projectImages.generated';
import { ProjectsQueryVariables } from '../../../graphql/projects/projects.generated';

import {
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa';

import {
  DescriptionStyles,
  ImageOverlayText,
  LinksStyles,
  ProjectContainer,
} from './ProjectStyles';
import Modal from './modal/Modal';

interface IProjectProps {
  project: ProjectsQueryVariables;
  inView: boolean;
  projectRef: RefObject<HTMLDivElement>;
}

const Project = ({ project }: IProjectProps) => {
  const [showModal, setShowModal] = useState(false);

  const { setScrollWithModal } = useScroll();

  const { ref, inView } = useInView({
    threshold: 0.35,
    triggerOnce: true,
  });

  // const [loadImages, { loading, data }] =
  //   useProjectsImagesLazyQuery({
  //     variables: {
  //       title: project?.attributes?.title,
  //     },
  //   } );

  const { data, loading } = useProjectsImagesQuery({
    variables: {
      title: project?.attributes?.title,
    },
  });

  const toggleModal = () => {
    setShowModal(prev => !prev);
    setScrollWithModal((prev: boolean) => !prev);
  };

  const imageUrl =
    project?.attributes?.main_image?.data?.attributes?.url;

  const projectTitle = project?.attributes?.title;

  return (
    <ProjectContainer ref={ref} inView={inView}>
      <h3 className='project-title'>{projectTitle}</h3>

      <div className='project-body'>
        <section
          onClick={() => {
            toggleModal();
            // loadImages();
          }}
          className='project-img'
        >
          <ImageOverlayText>View more</ImageOverlayText>
          <Image
            src={imageUrl}
            alt={projectTitle}
            width={750}
            height={500}
            objectFit='contain'
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

            <hr className='hr-project-description' />

            <ul>
              {project?.attributes?.tech_used?.map(
                (tech: any) => (
                  <li key={tech.id}>
                    <Image
                      src={
                        tech.tech_logo.data.attributes.url
                      }
                      alt={tech.tech_title}
                      width={35}
                      height={25}
                      objectFit='scale-down'
                    />
                    {tech.tech_title}
                  </li>
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
            data-tooltip={`Visit`}
          >
            <FaExternalLinkAlt />
          </a>
          <a
            href={project?.attributes?.link_git}
            target='_blank'
            rel='noreferrer'
            data-tooltip='Source code'
          >
            <FaGithub />
          </a>
        </LinksStyles>
      </div>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        slides={data?.projects?.data[0].attributes}
        projectTitle={projectTitle}
      />
    </ProjectContainer>
  );
};

export default Project;
