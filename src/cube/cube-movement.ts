import {
	populateValueMatrices,
	VALUE_MATRICES
} from './cube-move-matrix'

export const Px        = []
export const Py        = []
let DIVISIONS = 24

for (let i = 0; i < DIVISIONS; i++) {
	Px[i] = Py[i] = i * 15
}

export enum Bool {
	False = 0,
	True  = 1
}

export enum Move {
	Down = -1,
	None = 0,
	Up   = 1
}

populateValueMatrices()

export interface Position {
	x: number
	y: number
}

export interface MousePosition {
	last?: Position
	start: Position
}

export enum MoveIncrement {
	FORTY_FIVE = 45,
	FIFTEEN    = 15,
	FIVE       = 5,
}

export enum ZoomLevel {
	BROAD  = 45,
	COARSE = 15,
	FINE   = 5,
}

export interface ValuesOutCallback {
	(values: number[]): void
}



export const mouse: MousePosition = {
	start: {x: undefined, y: undefined}
};



export function getMod24AbsRemainder(num) {
	let remainder = num % DIVISIONS
	if (remainder < 0) {
		remainder = 24 + remainder
	}
	// remainder = Math.round(remainder)
	// if (remainder == 24) {
	//     remainder = 0
	// }
	return remainder
}

/*
function move(
	xMove,
	yMove
) {
	if (yMove == 24) {
		return
	}
	setTimeout(function () {
		if (xMove == 24) {
			moveY(0, ++yMove)
		} else {
			moveX(++xMove, yMove)
		}
	}, moveSpeed)
}

function moveX(
	x,
	y
) {
	viewport.move(Bool.False, Move.None, Bool.True, Move.Up)
	move(x, y)
}

function moveY(
	x,
	y
) {
	viewport.move(Bool.True, Move.Up)
	move(x, y)
}
*/

// setTimeout(function () {
//     move(0, 0)
// });

/*
viewport.duration = function () {
	var d                       = touch ? 50 : 500
	VP.style.transitionDuration = d + 'ms'
	return d
}()
*/

/*
var DISPLAYED_SURFACE_PERCENTAGES = [gQ('#n0'), gQ('#n1'), gQ('#n2'), gQ('#n3'), gQ('#n4'), gQ('#n5')]

function setDisplayedSurfacePercentages(
	values: number[]
) {
	for (let i = 0; i < 6; i++) {
		DISPLAYED_SURFACE_PERCENTAGES[i].innerText = values[i]
	}
}
*/

// setDisplayedSurfacePercentages(VALUE_MATRIX[0][0])

export function moveCoordinates(
	percentArray: number[],
	currentIndex: number
) {
	let multiplier = 1
	if (currentIndex < 0) {
		multiplier   = -1
		currentIndex = -currentIndex
	}
	let page  = Math.floor(currentIndex / DIVISIONS)
	let index = currentIndex % DIVISIONS

	if (index === DIVISIONS) {
		page++
		index = 0
	}

	let angle = percentArray[index]

	let rotation = (page * 360 + angle) * multiplier

	return [rotation, angle, index, page, multiplier]
}


/* Just for fun */
// if(!touch) {
//     $('.cube > div').eq(2).html('<object width="360" height="360"><param name="movie"
// value="http://www.youtube.com/v/MY5PkidV1cM?fs=1&amphl=en_GB&amprel=0"></param><param
// name="allowFullScreen" value="true"></param><param name="allowscriptaccess"
// value="always"></param><embed
// src="http://www.youtube.com/v/MY5PkidV1cM?fs=1&amphl=en_GB&amprel=0"
// type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true"
// width="360" height="360"></embed></object>') }