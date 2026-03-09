const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name:         { type: String, required: true, trim: true },
  attendance:   { type: Number, required: true, min: 0, max: 100 },
  marks:        { type: Number, required: true, min: 0, max: 100 },
  study_hours:  { type: Number, required: true, min: 0 },
  assignments:  { type: Number, required: true, min: 0, max: 100 },
  // Computed on save
  predicted_score: { type: Number },
  grade:           { type: String },
  risk_level:      { type: String, enum: ['Low','Medium','High','Critical'] },
  added_by:     { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

// Auto-compute prediction before save
studentSchema.pre('save', function (next) {
  const { attendance: a, marks: m, study_hours: s, assignments: as } = this;
  const score = Math.min(Math.round(
    0.25 * a + 0.35 * m + 0.20 * Math.min((s / 8) * 100, 100) + 0.20 * as
  ), 100);
  this.predicted_score = score;
  this.grade      = score>=90?'A+': score>=80?'A': score>=70?'B': score>=60?'C': score>=50?'D':'F';
  this.risk_level = score>=75?'Low': score>=60?'Medium': score>=45?'High':'Critical';
  next();
});

module.exports = mongoose.model('Student', studentSchema);
