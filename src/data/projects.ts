import type { ResearchProject } from '../types'
export const researchProjects: ResearchProject[] = [
  { title: 'CARLA Data Platform', description: 'Modular autonomous-driving data infrastructure with synchronized multi-camera, LiDAR, and radar recording, replay, and canonical sensor contracts.', technologies: ['CARLA', 'LiDAR', 'Radar', 'Data Infrastructure'] },
  { title: 'Geometry-Consistent Vectorized HD Mapping', description: 'Vectorized HD map learning with CARLA–nuScenes geometry compatibility, BEV perception, and coordinate and calibration consistency.', technologies: ['MapTR', 'MapTRv2', 'BEV Perception', 'Simulation-to-Real'] },
  { title: 'Cooperative HD Mapping', description: 'Online vectorized HD map generation through connected vehicles, V2V/V2X cooperation, real-time fusion, and uncertainty-aware mapping.', technologies: ['V2V/V2X', 'Map Fusion', 'Connected Vehicles'] },
  { title: 'Trustworthy Multi-Modal Perception', description: 'Robust perception for adverse urban environments using camera, LiDAR, radar, and vehicle-state fusion with uncertainty awareness.', technologies: ['Sensor Fusion', 'Camera', 'LiDAR', 'Radar'] },
  { title: 'Vision-Language-Action for Autonomous Driving', description: 'Foundation-model-based systems for multimodal reasoning, scene understanding, and explainable driving decision support.', technologies: ['VLA', 'Foundation Models', 'Multimodal Reasoning'] },
]
