# hacaakthon_kdk-clg
# Hackathon-KDK-
<br>
working on to create a web application on student performance prediction model
<br>

working on to create a web application on student performance prediction model Introduction A Student Prediction System uses AI algorithms to analyze past student data like marks, attendance, assignments, and behavior. Based on this data, the system predicts future performance and identifies students who may need extra support.
🎓 Student Performance Prediction System
A comprehensive web application that uses Machine Learning to predict student academic performance based on attendance, subject marks, and extracurricular activities
<br>
# 🎓 JD EduPredict AI
**Student Performance Prediction System**
*JD College of Engineering & Management, Nagpur*

---

## 📁 Project Structure

```
jd-edupredict/
├── frontend/
│   ├── index.html          ← Main app (single-page)
│   ├── css/
│   │   └── style.css       ← All styles
│   ├── js/
│   │   └── app.js          ← All frontend logic
│   └── assets/
│       └── college.jpg     ← College photo
│
├── backend/
│   ├── server.js           ← Express entry point
│   ├── models/
│   │   ├── Student.js      ← Student schema + auto-prediction
│   │   ├── Faculty.js      ← Faculty schema
│   │   └── User.js         ← User schema + bcrypt
│   ├── routes/
│   │   ├── auth.js         ← Register / Login / Me
│   │   ├── students.js     ← CRUD + bulk CSV import
│   │   ├── faculty.js      ← CRUD
│   │   └── predict.js      ← Prediction engine API
│   └── middleware/
│       └── auth.js         ← JWT protect middleware
│
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

---

## 🚀 Quick Start


**Predict request body:**
```json
{
  "attendance": 85,
  "marks": 78,
  "study_hours": 4.5,
  "assignments": 90
}
```

**Predict response:**
```json
{
  "predicted_score": 82,
  "grade": "A",
  "risk_level": "Low",
  "factors": { "attendance": 85, "marks": 78, "study_hours": 4.5, "assignments": 90 },
  "recommendations": [...]
}
```

---

## 🧠 Prediction Formula

```
Score = 0.25×Attendance + 0.35×Marks + 0.20×min(StudyHours/8×100, 100) + 0.20×Assignments
```

| Score | Grade | Risk Level |
|-------|-------|------------|
| ≥ 90  | A+    | Low        |
| ≥ 80  | A     | Low        |
| ≥ 75  | B+    | Low        |
| ≥ 70  | B     | Low        |
| ≥ 60  | C     | Medium     |
| ≥ 45  | D     | High       |
| < 45  | F     | Critical   |

---

## 📊 Student CSV Format

```csv
name,attendance,marks,study_hours,assignments
Rahul Kumar,85,78,4.5,90
Meera Joshi,62,55,2,45
Arjun Das,91,88,6,95
```

---

## 🛠️ Tech Stack

| Layer    | Technology |
|----------|-----------|
| Frontend | Vanilla HTML, CSS, JavaScript |
| Backend  | Node.js, Express.js |
| Database | MongoDB + Mongoose |
| Auth     | JWT + bcryptjs |
| CSV      | multer + csv-parser |

---

## 👨‍💻 Developed for
**JD College of Engineering & Management, Nagpur, Maharashtra**
