import React from "react";
import { Heading } from "../components/Heroes/HeroStyles/TextHeroElements";
import "./Timeline.scss";

const Timeline = ({ id }) => {
  return (
    <div className="remove-stuff" id={id}>
      <Heading id style={{ color: "rgb(17, 24, 28)", textAlign: "center" }}>
        Experience
      </Heading>
      <div id="timeline">
        <div className="job red">
          <div className="date">
            <span className="red-span"></span>02/22 – present
          </div>
          <div className="job_description">
            <h1>Junior Software Engineer</h1>
            <h3>SovTech</h3>
            <h2 color="gray">
              {" "}
              Technologies:
              <br />
              <img
                src=" https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                alt="CSS#"
                // width="8%"
              />
              <img
                src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white "
                alt="HTML%"
                // width="9.1%"
              />
              <img
                src=" https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E "
                alt="JS"
                // width="13%"
              />
              <img
                src=" https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white "
                alt="PHP"
                // width="7.3%"
              />
              <img
                src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white  "
                alt="TS"
                // width="13%"
              />
              <img
                src=" https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql "
                alt="GraphQL"
                // width="16.5%"
              />
              <img
                src="https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white "
                alt="chakra"
                // width="10%"
              />
              <img
                src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white  "
                alt="node"
                // width="10.3%"
              />
              <img
                src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                alt="react"
                // width="10%"
              />
              <img
                src="https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white "
                alt="strapi"
                // width="10.8%"
              />
              <img
                src=" https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white "
                alt=" "
                // width="8.7%"
              />
              <img
                src="https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white "
                alt="AWS DynamoDB"
                // width="21%"
              />
              <img
                src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white "
                alt="MySQL"
                // width="10.3%"
              />
              <img
                src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white "
                alt="AWS"
                // width="8.6%"
              />
              <img
                src="https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=azure-devops&logoColor=white"
                alt="AZURE"
                // width="10.2%"
              />
              <img
                src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white "
                alt="Docker"
                // width="11.4%"
              />
              <img
                src="https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white"
                alt="Bit Bucket"
                // width="8%"
              />
              <img
                src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white"
                alt="C#"
                // width="8%"
              />
              <img
                src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                alt="React Native"
                // width="8%"
              />
              <img
                src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"
                alt="Vite js"
                // width="8%"
              />
            </h2>

            <h5>
              Worked as part of various agile teams, with other teams consisting
              of up to 4 developers, and other teams where I would be the sole
              and only developer.
            </h5>
            <div>
              <ul>
                <li style={{ fontSize: "15px", color: "gray" }}>
                  <strong>Project 1</strong>, worked as a sole full stack
                  developer:
                  <ul>
                    <li>
                      Progressive Web App Project was in Reactjs, Vitejs,
                      Typescript for the front end, and the backend was .NET
                      Framework, .CORE using Swagger UI for the APIs(REST).
                    </li>
                    <li>
                      Managed to deliver results achieving 100% of story points
                      required for each weekly sprint.
                    </li>
                    <li>
                      Worked on DevOps and set up CI/CD pipelines for Azure
                      DevOps. Deployed a custom backend and Front end that would
                      go through continuous integration using other tools such
                      as SonarQube to curb issues
                    </li>
                    <li>Had less than 4% of feature to bug ratio.</li>
                  </ul>
                </li>

                <li style={{ fontSize: "15px", color: "gray" }}>
                  <strong>Project 2</strong>, worked as part of a 4 developer
                  team
                  <ul>
                    <li>
                      Web App Project was in Reactjs, TypeScript, Nodejs and
                      using and Amplify and Nodejs backend served by (Apollo
                      GraphQL)
                    </li>
                    <li>
                      Mobile App shared a similar backend but the frontend was
                      done in React-Native and TypeScript
                    </li>
                    <li>
                      Managed to refactor large legacy codebases and improve
                      speed of the application.
                    </li>
                    <li>
                      Introduced tests to help with perfecting the code base
                    </li>
                  </ul>
                </li>

                <li style={{ fontSize: "15px", color: "gray" }}>
                  <strong>Project 3</strong>, worked as a sole developer
                  <ul>
                    <li>
                      Managed and worked on the projects DevOps with AWS, set up
                      ports, VPCs, clusters, user pools, and containers for the
                      platform. Set up CI/CD pipelines and Intergration with
                      Bitbucket and AWS.
                    </li>
                    <li>
                      Tech Stack was Reactjs, TypeScript with a Nodejs backend
                      served with Apollo GraphQL and Strapi as the headless CMS
                    </li>
                    <li>Introduced SonarQube to help with linting.</li>
                    <li>
                      Refactored a lot of legacy code and updated tools being
                      used, moving it from Node 12 to Node 16, and also finally
                      getting the dormant project over the line into a project
                      in production. Set up Paystack payment Gateways and other
                      third parties for meeting streaming such as Agora
                    </li>
                  </ul>
                </li>

                <li style={{ fontSize: "15px", color: "gray" }}>
                  <strong>Project 4</strong>, worked as part of a 3 developer
                  team,
                  <ul>
                    <li>
                      Helped improve the codebase by removing legacy practices
                      and refactoring them.
                    </li>
                    <li>
                      Project was in PHP, and laravel as the PHP framework.
                      Managed CI/CD integration between Bitbucket and AWS
                    </li>
                    <li>
                      Objective Key results / KPIs: meeting expected targets,
                      95% completion of planned tasks, 95% of unplanned tasks,
                      code reviews, software audits, 95% time tracking accuracy,
                      project completion, 50% test coverage on each project
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <h3>Graduate Software Engineer</h3>

            <p className="content">
              Full stack development with various tech stacks on live projects.
              <ul>
                <li>
                  Developing, designing, building and maintaining custom
                  software for big corporations and start-ups
                </li>
                <li>
                  Worked on multiple projects catering for large groups of
                  users, with some projects being for conference calls, rentals,
                  and retail and ecommerce.
                </li>
                <li>
                  Being lead in a project, and helping the team finally get it
                  live
                </li>
                <li>
                  DevOps with AWS, integrating with Bitbucket. Experience with
                  Docker.
                </li>
                <li>
                  Extensive experience with CI/CD pipelines. Migration to newer
                  versions.
                </li>
                <li>
                  API design and Integration, Best practices, software
                  development.
                </li>
                <li>
                  Objective Key results: meeting expected targets, 85%
                  completion of planned tasks, 95% of unplanned tasks, code
                  reviews, software audits, 95% time tracking accuracy, project
                  completion.
                </li>
                <li>
                  Made extensive use of these AWS services: Beanstalk, VPC, EC2,
                  VPC, RDS, ECS, IAM, ECR, ELB, S3, Transcoder.
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className="job blue">
          <div className="date">
            <span className="blue-span"></span>06/21 – 02/22
          </div>
          <div className="job_description">
            <h1>Software Engineer Intern</h1>
            <h3>Afriserv</h3>
            <h2 color="gray">
              Technologies:
              <br />
              <img
                src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                alt="react"
              />
              <img
                src="https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=azure-devops&logoColor=white"
                alt="AZURE"
              />
              <img
                src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
                alt="GitHub"
              />
              <img
                src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
                alt="Git"
              />
              <img
                src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white  "
                alt="Styled components"
              />
            </h2>
            <h5>
              Full stack Development, which Included Front-end development with
              React.js. The stack was a (React, Express, Node and MongoDB)
              stack.
            </h5>
            <p className="content">
              <ul>
                <li>
                  Developed and implemented responsive UI(user interface) using
                  Reactjs framework.
                </li>
                <li>
                  Developed reusable components with the aid of
                  styled-components.
                </li>
                <li>Optimized and monitored performance</li>
                <li>
                  Experience working with Azure DevOps for version control and
                  deployments
                </li>
                <li>
                  Key achievements were meeting expected targets in bi-weekly
                  sprints.
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className="job green">
          <div className="date">
            <span className="green-span"></span>08/21 – 08/21
          </div>
          <div className="job_description">
            <h1>Fintech Intern</h1>
            <h3>CFTE Global Fintech Internship (UK)</h3>
            <h2 color="gray">
              Technologies:
              <br />
              PayPal, Onfido, R3, Chipper Cash
            </h2>
            <h5>
              Learnt to examine systems, how finance is digitally transforming
              the industry and to gather new requirements, giving feedback
              (whilst working with a team), and finally implementing the new
              systems.
            </h5>
            <p className="content">
              Excellent first-hand experience on AI in Finance. Worked with
              platforms in Finance with US and Citibank industry experts. Key
              achievements were meeting expected targets and working under
              pressure and as a team.
            </p>
          </div>
        </div>

        <div className="job green end">
          <div className="date">
            <span></span>01/19 – 12/20
          </div>
          <div className="job_description">
            <h1>Fullstack Developer</h1>
            <h3>Freelance</h3>
            <h2 color="gray">
              Technologies:
              <br />
              <img
                src=" https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white "
                alt="PHP"
              />
              <img
                src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white  "
                alt="bootstrap"
              />
              <img
                src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white "
                alt="MySQL"
              />
              <img
                src="https://img.shields.io/badge/Proto.io-161637?style=for-the-badge&logo=proto.io&logoColor=00e5ff "
                alt="proto.io"
              />
              <img
                src=" https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                alt="CSS#"
              />
              <img
                src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white "
                alt="HTML%"
              />
              <img
                src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
                alt="GitHub"
              />
            </h2>
            <h5>
              Developed web-apps and websites with PHP, managed databases and
              hosted on CPanel.
            </h5>
            <p className="content">
              <ul>
                <li>
                  Developed Freelancing website for project client front-end
                  architecture, and backend applications using PHP. Platform has
                  seen growth of its users since inception
                </li>
                <li>
                  User interactions, server, and database creation, with cross
                  platform optimization, documentation of project.
                </li>
                <li>
                  API design and development to meet technical and client needs
                </li>
                <li>
                  Key achievements were meeting expected targets and working
                  under pressure.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
