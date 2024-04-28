/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} publisher - Position title
 * @property {string} url - Company website
 * @property {string} releaseDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} summary - html/markdown summary of the position
 */

const publications = [
  {
    name: 'Robust simulation optimization for supply chain problem under uncertainty via neural network metamodeling',
    publisher: 'Computers & Industrial Engineering Journal',
    releaseDate: '2021-12-01',
    url: 'https://www.sciencedirect.com/science/article/pii/S0360835221005970',
    summary: 'Simulation optimization is a commonly applied technique to determine the optimal variables since the problem is too complex. Due to the uncertain nature of the real-world systems, it is also worthy to consider the robustness of the optimal solutions. To address this issue, this study investigates the problem of determining near-optimal safety stock levels in a multi-product supply chain with regard to deviations of its overall cost. A new framework is proposed to define the decision as well as environmental variables. This novel framework results in a significant reduction of the solution space while maintains the essential supply chain control parameters. The prediction performance of artificial neural networks (ANNs) with different structural settings are compared, and the best-fitted ANNs are selected to obtain the robust solutions. Consequently, we employ a robust metamodel-based simulation optimization approach based on Taguchi’s view and optimize the multi-objective supply chain problem with respect to supply chain operational costs and customer satisfaction criteria.',
  },
  {
    name: 'Mixed integer linear programming problem for personnel multi-day shift scheduling: A case study in an Iran hospital',
    publisher: 'Alexandria Engineering Journal',
    releaseDate: '2022-01-01',
    url: 'https://www.sciencedirect.com/science/article/pii/S1110016821003926',
    summary: 'In this study, a mixed-integer linear programming problem with cost (staff payroll) objective function is proposed to determine homogeneous personnel shift scheduling so that the constraints of the number of personnel per shift are met. The purpose of this study is to optimize the scheduling of personnel with the same skills to minimize variable hospital costs. In a hospital, homogeneous personnel might be skilled nurses who can work in the same departments or service staff of the departments. First, a mathematical model is proposed for scheduling as a linear problem and solved using Lingo software. By analyzing the results for a personnel working time period in Pasargad Hospital, it is found that while optimizing the utilization of the skilled staff within departments, the variable costs (payroll) related to the department for that specified period (month), which includes overtime, overnight and holidays, are reduced by around 10 percent.',
  },
  {
    name: 'Decision Support Framework for Home Health Caregiver Allocation: A Case Study of HHC Agency in Tennessee, USA',
    publisher: 'Health Analytics',
    releaseDate: '2024-02-01',
    url: 'https://arxiv.org/abs/2311.00696',
    summary: 'This research addresses a key question faced by home health agencies (HHAs): "How can caregiver allocation be optimized, especially when caregivers prefer flexibility in their visiting sequences?". While earlier studies proposed rigid visiting sequences, our study introduces a decision support framework that allocates caregivers through a hybrid method that considers the flexibility in visiting sequences and aims to reduce travel mileage, increase the number of visits per planning period, and maintain the continuity of care - a critical metric for patient satisfaction. Utilizing data from an HHA in Tennessee, United States, our approach led to an impressive reduction in average travel mileage (up to 42% depending on discipline) without imposing restrictions on caregivers. Furthermore, the proposed framework is used for caregivers supply analysis to provide valuable insights into caregiver resource management.',
  },

];

export default publications;
