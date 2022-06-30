import Image from 'next/image';
import {
  ProjectsQuery,
  ProjectsQueryVariables,
} from '../../../graphql/projects/projects.generated';

import {
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa';

import {
  DescriptionStyles,
  LinksStyles,
  ProjectStyles,
} from './ProjectStyles';
import { useState } from 'react';
import Modal from './modal/Modal';
import { useProjectsImagesLazyQuery } from '../../../graphql/projects/projectImages.generated';
import { useScroll } from '../../../lib/useScroll';

interface IProjectProps {
  project: ProjectsQueryVariables;
}

const Project = ({ project }: IProjectProps) => {
  const [showModal, setShowModal] = useState(false);

  const { scrollWithModal, setScrollWithModal } =
    useScroll();

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


  return (
    <ProjectStyles>
      <div
        className='project-img'
        onClick={() => {
          toggleModal();
          loadImages();
        }}
      >
        <Image
          src={
            project?.attributes?.main_image?.data
              ?.attributes?.url
          }
          alt={project?.attributes?.title}
          layout='fill'
          objectFit='contain'
        />

        <h3 className='project-title'>
          {project?.attributes?.title}
        </h3>

        <DescriptionStyles>
          <p>{project?.attributes?.description}</p>
          <ul>
            {project?.attributes?.tech_used?.map(
              (tech: any) => (
                <li key={tech.id}>{tech.tech_title}</li>
              )
            )}
          </ul>
        </DescriptionStyles>

        <LinksStyles>
          <a
            href={project?.attributes?.link}
            target='_blank'
            rel='noreferrer'
          >
            <FaExternalLinkAlt />
          </a>
          <a
            href={project?.attributes?.link_git}
            target='_blank'
            rel='noreferrer'
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
