export type LevelType = 'video'|'text'|'quiz'|'interactive'|'switch';

export interface LevelBase {
  id:string;
  title:string;
  type:LevelType;
  prerequisites?:string[];
  rewardXP?:number;
}

export type LevelContent =
  | (LevelBase & { type:'video'; url:string; transcript?:string })
  | (LevelBase & { type:'text'; markdown:string })
  | (LevelBase & { type:'quiz'; questions:Array<{q:string; choices:string[]; answer:number}> })
  | (LevelBase & { type:'interactive'; module:string; props?:Record<string,unknown> })
  | (LevelBase & { type:'switch'; goto:{ mapId:string; levelId:string } });

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
