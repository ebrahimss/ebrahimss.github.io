/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'University of Tennessee, Knoxville',
    position: 'Graduate Research Assistant',
    url: 'https://ise.utk.edu/',
    startDate: '2019-08-01',
    summary: 'My research has concentrated on developing innovative applications within optimization and machine learning to solve complex issues across various sectors. They include using machine learning to enhance operational efficiencies in healthcare logistics, employing deep learning models for improving reliability and performance in supply chain management under variable conditions, and applying advanced algorithms for optimizing power flow in electrical grids with an emphasis on renewable energy sources. Additionally, I have developed a flexible Python-based tool aimed at boosting efficiencies in production systems.',
    highlights: [
      'Data-Driven Decision Making: Leveraged unsupervised machine learning and optimization for home healthcare planning, decreasing operation costs by 16% (project sponsored by Covenant HCHB).',
      'Robust Optimization: Meta-modeling via deep learning for supply chain optimization under uncertainty',
      'Applied deep learning to predict scenario outcomes (coefficients of determination above 92%).',
      'Delivered risk assessment criteria to control inconsistency of optimal solutions.',
      'Advanced Optimization: AC power flow optimization via deep reinforcement learning.',
      'Grid congestion management by predicting renewable distributed energy resources.',
      'Data generation and Scenario assessment using PyPSA simulation models and EGRET.',
      'Developed a Python-based flexible simulation & optimization tool for production systems.',
    ],
  },
  {
    name: 'Fresenius Medical Care',
    position: 'Team Lead; Industrial partnership projct',
    url: 'https://www.linkedin.com/company/fresenius-medical-care/',
    startDate: '2023-06',
    endDate: '2023-08',
    summary: 'Leveraging a data-driven approach to minimize operational downtime, enhancing Overall Equipment Effectiveness (OEE) in a fully automated medical care production line. In-depth analysis of operational systems using mind maps, causal loops, and cause-effect diagrams to address key downtime contributors. Standard Operating Procedures (SOPs) included detailed failure modes, and refined data entry process, increased OEE by over 1.1% in all scenarios, yielding an annual revenue boost of more than a million USD.',
    highlights: [
      'Employed data engineering and machine learning to reduce downtime and improve OEE in a medical care production line.',
      'Created and implemented data-driven SOPs with detailed failure modes for each station..',
      'Optimized the bottleneck station, the bag welding station, using targeted mechanical interventions.',
      'Aligned solutions with employee dynamics through extensive workforce surveys.',
    ],
  },
  {
    name: 'Covenant Health, Fort Sanders Hospital',
    position: 'Team Lead; Industrial partnership projct',
    url: 'https://www.covenanthealth.com/',
    startDate: '2022-06',
    endDate: '2022-08',
    summary: 'The project focused on optimizing patient transportation within healthcare facilities. From February to April 2022, patient flow data extracted and analyzed to identify inefficiencies and improve transport processes. The study highlighted missed pickup times, inefficient staff allocation, and potential areas for reducing wait times, such as ensuring patients are ready for transport beforehand. The project utilized statistical analysis and modeling to determine optimal staff requirements and schedules, aiming to enhance transport response times and minimize idle time for transporters. This research provides a systematic approach to streamline patient transport operations, thereby improving efficiency and patient satisfaction.',
    // highlights: [
    //   '.',
    //   '.',
    //   '.',
    //   '.',
    //   '.',
    // ],
  },
  {
    name: 'Covenant HomeCare',
    position: 'Research Scientist',
    url: 'https://www.covenanthealth.com/homecare-hospice/',
    startDate: '2020-06',
    endDate: '2020-12',
    summary: 'The improvement project aimed to decrease travel mileage, increase visits per planning period, and ensure care continuity—key for patient satisfaction. The proposed solution framework significantly reduced travel mileage by up to 42%, depending on the discipline, without constraining caregivers. Additionally, the framework assists in analyzing caregiver supply, offering insights into effective resource management.',
    highlights: [
      'Data Extraction and Cleanup from the SQL database to ensure accuracy and consistency in caregiver schedules and patient information.',
      'Feature Engineering to develop new features by calculating distances between patient locations and deriving average travel times, along with temporal patterns of visits.',
      'Optimization Model Development; a hybrid model using machine learning and operations research to balance reduced travel, caregiver flexibility, and continuity of care.',
      'Deployment and Iteration of the model within a decision support system, continuously monitoring and updating the system based on performance data and changing requirements.',
    ],
  },
];

export default work;
