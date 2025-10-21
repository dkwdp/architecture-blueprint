export type LevelType = 'video'|'text'|'quiz'|'interactive'|'switch';

export interface MapNode {
  id: string;
  title: string;
  type: LevelType;
  pos: [number,number];
}

export interface MapStructure {
  id: string;
  title: string;
  background: string;
  nodes: MapNode[];
  tiles: string[];
}

