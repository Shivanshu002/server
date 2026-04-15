import 'dotenv/config';
import mongoose from 'mongoose';
import Course from './models/Course';
import Trainer from './models/Trainer';

const courses = [
  { title: 'Full Stack Web Development', duration: '6 Months', fees: 25000, description: 'Master MERN stack with real-world projects covering React, Node.js, MongoDB and Express.', category: 'Web Development' },
  { title: 'Data Science & Machine Learning', duration: '4 Months', fees: 30000, description: 'Learn Python, Pandas, Scikit-learn, and build ML models from scratch.', category: 'Data Science' },
  { title: 'UI/UX Design', duration: '3 Months', fees: 18000, description: 'Design stunning interfaces using Figma, Adobe XD with user research principles.', category: 'Design' },
  { title: 'Cloud Computing (AWS)', duration: '3 Months', fees: 22000, description: 'Get AWS certified with hands-on labs covering EC2, S3, Lambda, and more.', category: 'Cloud' },
  { title: 'Cybersecurity Fundamentals', duration: '4 Months', fees: 28000, description: 'Ethical hacking, network security, penetration testing and OWASP top 10.', category: 'Security' },
];

const trainers = [
  { name: 'Rajesh Kumar', expertise: 'Full Stack Development', experience: '8 Years', photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh' },
  { name: 'Priya Sharma', expertise: 'Data Science & AI', experience: '6 Years', photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya' },
  { name: 'Amit Verma', expertise: 'Cloud & DevOps', experience: '10 Years', photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit' },
];

async function seed() {
  await mongoose.connect(process.env.MONGO_URI as string);
  await Course.deleteMany({});
  await Trainer.deleteMany({});
  await Course.insertMany(courses);
  await Trainer.insertMany(trainers);
  console.log('Seeded 5 courses and 3 trainers');
  await mongoose.disconnect();
}

seed().catch(console.error);
