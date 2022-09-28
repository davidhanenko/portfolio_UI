import { RefObject, useState } from 'react';
import { useScroll } from '../../../lib/useScroll';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import {
  useProjectsImagesLazyQuery,
  useProjectsImagesQuery,
} from '../../../graphql/projects/projectImages.generated';

import {
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa';

import Modal from './modal/Modal';
import {
  Description,
  ImageOverlayText,
  Links,
  ProjectContainer,
} from './ProjectStyles';

import { PlaceholderWrapper } from '../../shared/placeholder/PlaceholderWrapper';
import { IMAGE_PLACEHOLDER } from '../../../config';
import { HeaderPlaceholder } from '../../shared/placeholder/HeaderPlaceholder';
import {
  TextPlaceholder,
  TextPlLine,
} from '../../shared/placeholder/TextPlaceholder';

interface IProjectProps {
  inView: boolean;
  projectRef: RefObject<HTMLDivElement> | undefined;
  project: {
    id?: string | null;
    attributes?: {
      __typename?: 'Project';
      title?: string | null;
      project_type?: string | null;
      link?: string | null;
      link_git?: string | null;
      description?: string | null;
      main_image: {
        __typename?: 'UploadFileEntityResponse';
        data?: {
          __typename?: 'UploadFileEntity';
          attributes?: {
            __typename?: 'UploadFile';
            url: string;
          } | null;
        } | null;
      };
      tech_used?: Array<
        | {
            __typename?: 'ComponentTechTech';
            id: string;
            tech_title?: string | null;
            tech_logo?: {
              __typename?: 'UploadFileEntityResponse';
              data?: {
                __typename?: 'UploadFileEntity';
                attributes?: {
                  __typename?: 'UploadFile';
                  url: string;
                } | null;
              } | null;
            } | null;
          }
        | { __typename?: 'Error' }
        | null
      > | null;
    } | null;
  };
}

// project description section placeholder
export const ProjectDescriptionPlaceholder = () => {
  return (
    <PlaceholderWrapper>
      <HeaderPlaceholder />
      <hr
        style={{
          color: 'orange',
          width: '50%',
          marginLeft: '5%',
        }}
      />
      <TextPlaceholder />
      <hr
        style={{
          color: 'orange',
          width: '50%',
          marginLeft: '5%',
        }}
      />
      <TextPlLine />
      <TextPlLine />
    </PlaceholderWrapper>
  );
};

const Project: React.FC<IProjectProps> = ({ project }) => {
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
      {projectTitle && (
        <h3 className='project-title'>{projectTitle}</h3>
      )}

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
            width={700}
            height={400}
            objectFit='contain'
            placeholder='blur'
            blurDataURL={IMAGE_PLACEHOLDER}
          />
        </section>

        {loading ? (
          <ProjectDescriptionPlaceholder />
        ) : (
          imageUrl && (
            <Description inView={inView}>
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
            </Description>
          )
        )}
        <Links>
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
        </Links>
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
