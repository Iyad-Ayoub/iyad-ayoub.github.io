import type { ExpertiseCategory } from '../types'

export const expertise: ExpertiseCategory[] = [
  { title: 'Programming & Engineering', skills: ['Python', 'C/C++', 'MATLAB', 'Rust (basic)', 'SQL', 'Git', 'Docker', 'Linux', 'CI/CD'] },
  { title: 'AI & Computer Vision', skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Deep Learning', 'Large Language Models', 'Scene Understanding'] },
  { title: 'Autonomous Driving', skills: ['CARLA', 'ROS2', 'MapTR', 'MapTRv2', 'nuScenes', 'BEV Perception', 'Vectorized HD Mapping', 'Simulation-to-Real Validation'] },
  { title: 'Robotics & Sensor Fusion', skills: ['LiDAR', 'Multi-Camera Systems', 'GNSS/DGPS', 'IMU', 'Odometry', 'SLAM', 'CAN Bus', 'Sensor Synchronization'] },
  { title: 'Embedded & Experimental Systems', skills: ['Embedded Systems', 'Arduino', 'Raspberry Pi', 'PLC', 'FPGA/CPLD', 'Real-Vehicle Experimentation', 'Field Validation'] },
]
