interface LevelIdImpl {
	levelId: string,
	mapId?: string,
	serverUrl?: string,
}

export type LevelId = LevelIdImpl | string | null;

export type ElementType = 'video'|'text'|'quiz'|'interactive'|'switch'|"button";

export interface LevelElementData {
	type: ElementType,
}

export interface VideoElementData extends LevelElementData {
	type: 'video';
	url: string;
}

export interface TextElementData extends LevelElementData {
	type: 'text';
	markdown: string;
}

/*
export interface LevelQuiz extends LevelBase {
  type: 'quiz';
  questions: {
    q: string;
    choices: string[];
    answer: number;
  }[];
}
 */

export interface InteractiveElementData extends LevelElementData {
	type: 'interactive';
	entrypoint: string;
}

export interface SwitchElementData extends LevelElementData {
	type: 'switch';
	next_level: LevelId;
}

export interface ButtonElementData extends LevelElementData {
	type: 'button';
	url: string;
	text: string;
	target?: string;
}

export interface Level {
	id: string,
	title: string,
	next_level?: LevelId,
	elements: LevelElementData[],
}

export interface MapNode {
  id: string;
  title: string;
  pos: [number, number];
}

export interface MapStructure {
  id: string;
  title: string;
  background: string;
  levels: MapNode[];
  tiles: string[];
}
