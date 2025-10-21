export interface MapNode {
  id:string;
  title:string;
  type:LevelType;
  pos:[number,number];
}

export interface MapStructure {
  id:string;
  title:string;
  background:string;
  nodes:MapNode[];
  edges:[string,string][];
}

