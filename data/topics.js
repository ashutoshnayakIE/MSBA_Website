// do not add "," in the name of the course
// 0 is added in between the course abbreviation as we do not want "," or any other special character
var data =
{
 "name": "Analytics",
 "value": 0.5,
 "course":"se0as0adm0ml0sb0sa",
 "children": [
  {
   "name": "Modeling",
   "value":2.65,
   "course":"as0sa0adm0sb0se0ml",
   "children": [
    {"name": "Kalman Filters", "value": 1.3,"website":"https://www.google.com","course":"as"},
    {"name": "Time Series", "value": 3.5,"website":"https://www.google.com","course":"as"},
    {"name": "Hidden Markov Model","value": 1.15,"website":"https://www.google.com","course":"sa"},
    {
     "name": "Optimization",
     "value":1.75,
     "course":"adm0sa",
     "children": [
      {"name": "Introducition", "value": 1.5,"website":"https://www.google.com","course":"adm"},
      {"name": "Gradient Based Methods", "value": 2.1,"website":"https://www.google.com","course":"sa"},
      {"name": "Linear and Non Linear Optimization", "value": 2,"website":"https://www.google.com","course":"adm"},
      {"name": "Meta-hueristics", "value": 1.7,"website":"https://www.google.com","course":"sa"},
      {"name": "Optimization in ML", "value": 1.85,"website":"https://www.google.com","course":"sa"}
     ]
    },
    {
     "name": "Simulation",
     "value":2.2,
     "course":"sb0sa",
     "children": [
      {"name": "Defining Simulation", "value": 2.2,"website":"https://www.google.com","course":"sb"},
      {"name": "Example", "value": 2.275,"website":"https://www.google.com","course":"sb"},
      {"name": "Generating Random Variables", "value": 2.35,"website":"https://www.google.com","course":"sb"},
      {
        "name":"MCMC",
        "value":2.45,
        "course":"sb",
        "children":[
          {"name": "Gibbs Sampling", "value": 2.45,"website":"https://www.google.com","course":"sb"},
          {"name": "Metropolis Hastings", "value": 2.525,"website":"https://www.google.com","course":"sb"}
        ]
      }
     ]
    },
    {
     "name": "Machine Learning",
     "value":2.5,
     "course":"ml0se0as0sa",
     "children": [
      {"name": "Logistic Regression", "value": 2.6,"website":"https://www.google.com","course":"ml"},
      {
        "name": "Regression",
        "value": 2.65,
        "course":"as0se",
        "children":[
          {"name": "Linear Regression", "value": 2.675,"website":"https://www.google.com","course":"se"},
          {"name": "Ridge Lasso Regression", "value": 2.75,"website":"https://www.google.com","course":"as"}
        ]
      },
      {
        "name":"Ensemble Methods",
        "value":2.95,
        "course":"as0sa",
        "children":[
          {"name": "Random Forest", "value": 2.825,"website":"https://www.google.com","course":"as"},
          {"name": "Gradient Boosting", "value": 2.9,"website":"https://www.google.com","course":"as"},
          {"name": "XGBoost", "value": 2.975,"website":"https://www.google.com","course":"sa"},
          {"name": "Bagging vs Boosting", "value": 3.05,"website":"https://www.google.com","course":"as"}
        ]
      },
      {
        "name":"Neural Network Introduction",
        "value":3.35,
        "course":"ml0sa",
        "children":[
          {"name": "Neuron", "value": 3.2,"website":"https://www.google.com","course":"ml"},
          {"name": "Deep Learning", "value": 3.275,"website":"https://www.google.com","course":"ml"},
          {"name": "Recurrent Neural Network", "value": 3.35,"website":"https://www.google.com","course":"sa"},
          {"name": "Convolution Neural Network", "value": 3.425,"website":"https://www.google.com","course":"sa"}
        ]
      }
     ]
    }
   ]
  },
  {
   "name": "Probability",
   "value": 0.85,
   "course":"se0sa0sb0ml0as",
   "children": [
   {"name": "Probability Distribution","value": 1,"website":"https://www.google.com","course":"se"},
   {
    "name": "Bayes Theorem",
    "value":0.45,
    "course":"sa",
    "children": [
     {"name": "Bayes Definition", "value": 0.4,"website":"https://www.google.com","course":"sa"},
     {"name": "Bayesian Linear Regression", "value": 0.475,"website":"https://www.google.com","course":"sa"},
     {"name": "Multi-arm bandit", "value": 0.55,"website":"https://www.google.com","course":"sa"}
    ]
   },
   {
    "name": "Information Theory",
    "value":0.75,
    "course":"sb0as0ml",
    "children": [
     {"name": "Information Gain", "value": 0.725,"website":"https://www.google.com","course":"sb"},
     {"name": "Maximum Likelihood", "value": 0.65,"website":"https://www.google.com","course":"as"},
     {"name": "Defining Entropy", "value": 0.8,"website":"https://www.google.com","course":"sb"},
     {"name": "Cross-Entropy", "value": 0.9,"website":"https://www.google.com","course":"ml"}
    ]
  }
  ]
  },
  {
   "name": "Model Testing",
   "value":-0.25,
   "course":"sb0ml0sa0se",
   "children": [
    {"name": "Feature Selection", "value": 0,"website":"https://www.google.com","course":"sb"},
    {"name": "Cross Validation", "value": 0.075,"website":"https://www.google.com","course":"sb"},
    {"name": "Training Testing and Validation Set", "value": -0.075,"website":"https://www.google.com","course":"sb"},
    {
     "name": "Evaluation Metric",
     "value":-0.65,
     "course":"sb0ml",
     "children": [
      {"name": "RMSE", "value": -0.425,"website":"https://www.google.com","course":"sb"},
      {"name": "F1-measure", "value": -0.5,"website":"https://www.google.com","course":"sb"},
      {"name": "AIC BIC", "value": -0.575,"website":"https://www.google.com","course":"ml"},
      {"name": "Accuracy Recall Precision", "value": -0.65,"website":"https://www.google.com","course":"sb"}
      ]
    },
    {
     "name": "Regularization",
     "value":-0.85,
     "course":"sa",
     "children": [
      {"name": "Model based", "value": -0.75,"website":"https://www.google.com","course":"sa"},
      {"name": "Weight Based", "value": -0.825,"website":"https://www.google.com","course":"sa"}
      ]
    },
    {
     "name": "Hypothesis Testing",
     "value":0.15,
     "course":"se",
     "children": [
      {"name": "p Value", "value": 0.3,"website":"https://www.google.com","course":"se"},
      {"name": "Confidence Interval", "value": 0.225,"website":"https://www.google.com","course":"se"}
      ]
    },
    {
     "name": "Hyper parameters",
     "value":-0.5,
     "course":"sa",
     "children": [
      {"name": "Grid search", "value": -0.15,"website":"https://www.google.com","course":"sa"},
      {"name": "Random search", "value": -0.3,"website":"https://www.google.com","course":"sa"},
      {"name": "Bayesian search", "value": -0.225,"website":"https://www.google.com","course":"sa"}
      ]
    }
   ]
  },
  {
   "name": "Data Engineering",
   "value":-2.1,
   "course":"as0ml0sb",
   "children": [
    {"name": "Normalization", "value": -2.0,"website":"https://www.google.com","course":"sb"},
    {"name": "One Hot Vector", "value": -2.125,"website":"https://www.google.com","course":"sb"},
    {"name": "Box Plot", "value": -2.225,"website":"https://www.google.com","course":"sb"},
    {"name": "Histogram", "value": -2.325,"website":"https://www.google.com","course":"sb"},
    {
     "name": "Dimension Reduction",
     "value":-2.35,
     "course":"as0sa0ml",
     "children": [
      {"name": "PCA", "value": -2.4,"website":"https://www.google.com","course":"as"},
      {"name": "SVD", "value": -2.475,"website":"https://www.google.com","course":"as"},
      {"name": "Factor Analysis", "value": -2.55,"website":"https://www.google.com","course":"as"},
      {"name": "tSNE", "value": -2.625,"website":"https://www.google.com","course":"sa"},
      {"name": "Autoencoders", "value": -2.7,"website":"https://www.google.com","course":"ml"}
     ]
    }
   ]
 },
  {
   "name": "Linear Algebra",
   "value":-1.25,
   "course":"sb0sa",
   "children": [
   {"name": "Vector Definition", "value": -1,"website":"https://www.google.com","course":"sb"},
   {"name": "Eigen Values", "value": -1.1,"website":"https://www.google.com","course":"sa"},
   {"name": "Linear Regression", "value": -1.3,"website":"https://www.google.com","course":"sb"},
   {"name": "Transformation", "value": -1.4,"website":"https://www.google.com","course":"sa"},
   {"name": "Matrices", "value": -1.6,"website":"https://www.google.com","course":"sa"},
   {"name": "Vectorization", "value": -1.8,"website":"https://www.google.com","course":"sb"}
  ]
  }
 ]
}
