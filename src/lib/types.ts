interface LevelIdImpl {
	levelId: string,
	mapId?: string,
	serverUrl?: string,
}

export type LevelId = LevelIdImpl | string | null;

export type ElementType = 'video'|'text'|'quiz'|'interactive'|'switch'|"button";

export interface LevelElement {
	type: ElementType,
}

export interface VideoElement extends LevelElement {
	type: 'video';
	url: string;
}

export interface TextElement extends LevelElement {
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

export interface InteractiveElement extends LevelElement {
	type: 'interactive';
	entrypoint: string;
}

export interface SwitchElement extends LevelElement {
	type: 'switch';
	next_level: LevelId;
}

export interface ButtonElement extends LevelElement {
	type: 'button';
	url: string;
	text: string;
	target?: string;
}

export interface Level {
	id: string,
	title: string,
	next_level?: LevelId,
	elements: LevelElement[],
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
