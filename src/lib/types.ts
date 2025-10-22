export type LevelType = 'video'|'text'|'quiz'|'interactive'|'switch';

interface LevelIdImpl {
	mapId: string,
	levelId?: string,
	serverUrl?: string,
}
export type LevelId = LevelIdImpl | string | null;

export interface LevelBase {
	id: string,
	title: string,
	type: LevelType,
}

export interface LevelVideo extends LevelBase {
	type: 'video';
	video_url: string;
	start_button_url: string;
	next_level: LevelId,
}

export interface LevelText extends LevelBase {
	type: 'text';
	markdown: string;
	next_level: LevelId,
}

/*
export interface LevelQuiz extends LevelBase {
  type: 'quiz';
  questions: {
    q: string;
    choices: string[];
    answer: number;
  }[];
	next_level: LevelId,
}
 */

export interface LevelInteractive extends LevelBase {
	type: 'interactive';
	entrypoint: string;
	next_level: LevelId,
}

export interface LevelSwitch extends LevelBase {
	type: 'switch';
	next_level: (LevelId)[];
}

export type LevelContent =
	| LevelVideo
	| LevelText
	// | LevelQuiz
	| LevelInteractive
	| LevelSwitch;

export interface MapNode {
  id: string;
  title: string;
  type: LevelType;
  pos: [number, number];
}

export interface MapStructure {
  id: string;
  title: string;
  background: string;
  levels: MapNode[];
  tiles: string[];
}
