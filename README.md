# hacaakthon_kdk-clg
# Hackathon-KDK-
<br>
working on to create a web application on student performance prediction model
<br>

working on to create a web application on student performance prediction model Introduction A Student Prediction System uses AI algorithms to analyze past student data like marks, attendance, assignments, and behavior. Based on this data, the system predicts future performance and identifies students who may need extra support.
🎓 Student Performance Prediction System
A comprehensive web application that uses Machine Learning to predict student academic performance based on attendance, subject marks, and extracurricular activities.

🌟 Features
Student Data Management: Add, edit, and delete student records
ML-Powered Predictions: Predict final grades using Random Forest and Linear Regression
Analytics Dashboard: Interactive charts and visualizations
Performance Insights: Top performers, correlation analysis, and statistics
Responsive Design: Modern UI that works on all devices
🛠️ Tech Stack
Backend: Python Flask
Database: MySQL
Machine Learning: scikit-learn (Random Forest, Linear Regression)
Frontend: HTML5, CSS3, JavaScript, Bootstrap 5
Visualization: Matplotlib, Seaborn
Data Processing: Pandas, NumPy
📋 Prerequisites
Python 3.7+
MySQL Server
pip (Python package manager)
🚀 Quick Start
Option 1: Automated Setup (Recommended)
Clone or download the project

git clone <repository-url>
cd student-performance-prediction
Run the setup script

python setup.py
This will:

Install all required dependencies
Set up the MySQL database
Create necessary directories
Load sample data
Start the application

python app.py
Open your browser Navigate to http://localhost:5000

Option 2: Manual Setup
Install dependencies

pip install -r requirements.txt
Set up MySQL database

Create a database named student_performance
Run the SQL script: mysql -u root -p < database.sql
Configure environment

Copy .env.example to .env
Update database credentials in .env
Run the application

python app.py
📊 Database Schema
The system uses a single students table with the following structure:

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    attendance FLOAT NOT NULL,
    math_marks FLOAT NOT NULL,
    science_marks FLOAT NOT NULL,
    english_marks FLOAT NOT NULL,
    activities INT NOT NULL, -- 0 = no, 1 = yes
    final_grade FLOAT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
🎯 Usage Guide
1. Adding Students
Navigate to "Add Student" page
Fill in student details (name, attendance, marks, activities)
The system validates input ranges (0-100 for marks/grades)
2. Making Predictions
Go to "Predict" page
Enter student data (without final grade)
Get instant ML-powered predictions with confidence levels
3. Viewing Analytics
Access the "Dashboard" for comprehensive analytics
View grade distributions, correlation heatmaps, and performance trends
Identify top-performing students and patterns
4. Managing Data
Use "View Students" to see all records
Edit or delete student information as needed
Search and filter through student records
🤖 Machine Learning Model
The system uses two ML algorithms:

Random Forest Regressor (Default)

Handles non-linear relationships
Provides feature importance
Good for complex patterns
Linear Regression

Simple and interpretable
Fast predictions
Good baseline model
Model Training
Automatically trains on existing data
Retrain using "Retrain Model" button in dashboard
Model saved as models/student_performance_model.pkl
📈 Analytics Features
Grade Distribution: Histogram showing performance distribution
Correlation Heatmap: Relationships between different factors
Subject Comparison: Average performance across subjects
Attendance vs Grade: Scatter plot with trend analysis
Top Performers: Ranked list of best students
Statistics Summary: Key metrics and insights
🔧 Configuration
Environment Variables (.env)
# Database Configuration
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=student_performance

# Flask Configuration
SECRET_KEY=your-secret-key
DEBUG=True

# Model Configuration
MODEL_PATH=models/student_performance_model.pkl
Model Configuration
Change algorithm in ml_model.py
Adjust hyperparameters for better performance
Add feature engineering as needed
📁 Project Structure
student-performance-prediction/
├── app.py                 # Main Flask application
├── config.py             # Configuration settings
├── database.py           # Database operations
├── ml_model.py           # Machine learning model
├── setup.py              # Setup script
├── requirements.txt      # Python dependencies
├── database.sql          # Database schema and sample data
├── README.md             # This file
├── models/               # Trained ML models
├── static/               # CSS, JS, and static files
│   ├── style.css
│   └── script.js
└── templates/            # HTML templates
    ├── base.html
    ├── home.html
    ├── add_student.html
    ├── view_students.html
    ├── edit_student.html
    ├── predict.html
    └── dashboard.html
🚀 Deployment
Local Development
python app.py
Production Deployment
Set DEBUG=False in .env
Use a production WSGI server (e.g., Gunicorn)
Configure reverse proxy (e.g., Nginx)
Set up SSL certificates
Configure database for production
🤝 Contributing
Fork the repository
Create a feature branch
Make your changes
Add tests if applicable
Submit a pull request
📝 License
This project is open source and available under the MIT License.

🆘 Troubleshooting
Common Issues
Database Connection Error

Check MySQL server is running
Verify credentials in .env
Ensure database exists
Module Import Error

Run pip install -r requirements.txt
Check Python version (3.7+)
Model Training Error

Ensure database has data
Check file permissions for models/ directory
Chart Display Issues

Verify matplotlib backend configuration
Check browser console for errors
Getting Help
Check the logs in the terminal
Verify all dependencies are installed
Ensure database is properly configured
Check file permissions
🎉 Features Roadmap
 Export data to CSV/Excel
 Advanced ML algorithms (XGBoost, Neural Networks)
 Student performance trends over time
 Email notifications for predictions
 Multi-class classification (Grade categories)
 API endpoints for external integration
 User authentication and roles
 Batch prediction upload
📞 Support
For support and questions:

Create an issue in the repository
Check the troubleshooting section
Review the code documentation
