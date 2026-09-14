export interface BlueprintPoint {
  x: number;
  y: number;
}

export interface BlueprintPath {
  points: BlueprintPoint[];
  closed: boolean;
  type: 'line' | 'curve' | 'arc';
}

export interface BlueprintComponent {
  id: string;
  name: string;
  paths: BlueprintPath[];
  annotations?: BlueprintAnnotation[];
  dimensions?: BlueprintDimension[];
}

export interface BlueprintAnnotation {
  text: string;
  position: BlueprintPoint;
  leader?: BlueprintPoint[];
}

export interface BlueprintDimension {
  start: BlueprintPoint;
  end: BlueprintPoint;
  value: string;
  offset?: number;
}

export function createLine(x1: number, y1: number, x2: number, y2: number): BlueprintPath {
  return {
    points: [{ x: x1, y: y1 }, { x: x2, y: y2 }],
    closed: false,
    type: 'line',
  };
}

export function createRectangle(x: number, y: number, width: number, height: number): BlueprintPath {
  return {
    points: [
      { x, y },
      { x: x + width, y },
      { x: x + width, y: y + height },
      { x, y: y + height },
    ],
    closed: true,
    type: 'line',
  };
}

export function createCircle(x: number, y: number, radius: number, segments: number = 32): BlueprintPath {
  const points: BlueprintPoint[] = [];
  for (let i = 0; i < segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    points.push({
      x: x + Math.cos(angle) * radius,
      y: y + Math.sin(angle) * radius,
    });
  }
  return {
    points,
    closed: true,
    type: 'curve',
  };
}

export function createGear(
  x: number,
  y: number,
  outerRadius: number,
  innerRadius: number,
  teeth: number
): BlueprintPath[] {
  const paths: BlueprintPath[] = [];
  const outerPoints: BlueprintPoint[] = [];
  const innerPoints: BlueprintPoint[] = [];

  for (let i = 0; i < teeth * 2; i++) {
    const angle = (i / (teeth * 2)) * Math.PI * 2;
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    outerPoints.push({
      x: x + Math.cos(angle) * radius,
      y: y + Math.sin(angle) * radius,
    });
  }

  // Inner circle
  for (let i = 0; i < 32; i++) {
    const angle = (i / 32) * Math.PI * 2;
    innerPoints.push({
      x: x + Math.cos(angle) * innerRadius * 0.5,
      y: y + Math.sin(angle) * innerRadius * 0.5,
    });
  }

  paths.push({ points: outerPoints, closed: true, type: 'line' });
  paths.push({ points: innerPoints, closed: true, type: 'curve' });

  return paths;
}

export function generateSVGPath(path: BlueprintPath): string {
  if (path.points.length === 0) return '';

  const start = path.points[0];
  let d = `M ${start.x} ${start.y}`;

  for (let i = 1; i < path.points.length; i++) {
    const point = path.points[i];
    d += ` L ${point.x} ${point.y}`;
  }

  if (path.closed) {
    d += ' Z';
  }

  return d;
}

export function calculatePathLength(path: BlueprintPath): number {
  let length = 0;
  for (let i = 1; i < path.points.length; i++) {
    const prev = path.points[i - 1];
    const curr = path.points[i];
    length += Math.sqrt(Math.pow(curr.x - prev.x, 2) + Math.pow(curr.y - prev.y, 2));
  }
  return length;
}
