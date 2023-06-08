import { RefObject, useEffect, useState } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useScroll } from '../../../lib/useScroll';

import {
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa';

import Modal from './modal/Modal';
import {
  Description,
  ProjectContainer,
  ProjectHeader,
} from './ProjectStyles';

import { IMAGE_PLACEHOLDER } from '../../../config';
import { ProjectsQuery } from '../../../graphql/projects/projects.generated';

interface IProjectProps {
  inView: boolean;
  isSlide: boolean;
  projectRef: RefObject<HTMLDivElement> | undefined;
  project: ProjectsQuery | any;
}

const Project: React.FC<IProjectProps> = ({ project }) => {
  const [showModal, setShowModal] = useState(false);
  const [isSlide, setIsSlide] = useState(false);
  const { setScrollWithModal } = useScroll();

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // const { data, loading } = useProjectsImagesQuery({
  //   variables: {
  //     title: project.attributes.title,
  //   },
  // });

  // useEffect(() => {
  //   setIsSlide(
  //     data?.projects?.data[0]?.attributes?.images?.data
  //       .length! > 0
  //       ? true
  //       : false
  //   );
  // }, [data]);

  const toggleModal = () => {
    setShowModal(prev => !prev);
    setScrollWithModal((prev: boolean) => !prev);
  };

  const imageUrl =
    project?.attributes?.main_image?.data?.attributes?.url;

  const projectTitle = project?.attributes?.title;

  return (
    <ProjectContainer
      ref={ref}
      inView={inView}
      isSlide={isSlide}
    >
      <div className='project-wrapper'>
        <ProjectHeader inView={inView}>
          <h4 className='project-title'>{projectTitle}</h4>

          <div className='project-links'>
            <a
              href={`/${project.id}`}
              className='view-more-btn'
            >
              View More
            </a>
            <div className='outer-links'>
              {project?.attributes.link && (
                <a
                  href={project?.attributes?.link}
                  target='_blank'
                  rel='noreferrer'
                  data-tooltip='Visit'
                >
                  <FaExternalLinkAlt />
                </a>
              )}
              {project?.attributes.link_git && (
                <a
                  href={project?.attributes.link_git}
                  target='_blank'
                  rel='noreferrer'
                  data-tooltip='Code'
                >
                  <FaGithub />
                </a>
              )}
            </div>
          </div>
        </ProjectHeader>

        <div className='project-body'>
          <div
            onClick={() => {
              isSlide && toggleModal();
            }}
            className='project-img'
          >
            <Image
              src={imageUrl!}
              alt={projectTitle!}
              layout='fill'
              placeholder='blur'
              blurDataURL={IMAGE_PLACEHOLDER}
            />

            {imageUrl && (
              <Description inView={inView}>
                <div className='description-wrapper'>
                  <h5 className='project-type'>
                    {project?.attributes?.project_type}
                  </h5>

                  <p className='project-description'>
                    {project?.attributes?.description}
                  </p>

                  <ul>
                    {project?.attributes?.tech_used?.map(
                      (tech: any) => (
                        <li key={tech.id}>
                          {tech.tech_title}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </Description>
            )}
          </div>
        </div>

        {/* <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          slides={data?.projects?.data[0].attributes}
          projectTitle={projectTitle!}
        /> */}
      </div>
    </ProjectContainer>
  );
};

export default Project;
