import type { ExpertiseCategory } from '../types'

export const expertise: ExpertiseCategory[] = [
  { title: 'Programming & Engineering', skills: ['Python', 'C/C++', 'MATLAB', 'Rust (basic)', 'SQL', 'Git', 'Docker', 'Linux', 'CI/CD'] },
  { title: 'Localization, Robotics & Sensor Fusion', skills: ['GNSS/DGPS', 'IMU', 'Odometry', 'LiDAR', 'Cameras', 'Radar', 'Kalman Filtering', 'SLAM', 'Sensor Calibration', 'Synchronization', 'Coordinate Transformations'] },
  { title: 'AI & Computer Vision', skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Deep Learning', 'Computer Vision', 'Scene Understanding'] },
  { title: 'Autonomous Driving & Simulation', skills: ['CARLA', 'ROS2', 'nuScenes', 'MapTR', 'MapTRv2', 'BEVFormer', 'BEVFusion', 'Vectorized HD Mapping', 'BEV Perception', 'Simulation-to-Real Validation'] },
  { title: 'Embedded & Experimental Systems', skills: ['Embedded Systems', 'Real-Time Systems', 'CAN', 'Robotic Prototyping', 'Experimental Vehicles', 'Field Validation'] },
]
