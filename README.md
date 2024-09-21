# @ouroboros/react-testing

[![npm version](https://img.shields.io/npm/v/@ouroboros/react-testing.svg)](https://www.npmjs.com/package/@ouroboros/react-testing) ![MIT License](https://img.shields.io/npm/l/@ouroboros/react-testing.svg)

A React component that displays testing info. Can be useful for debugging, but should only be rendered during development / staging and never in production.

## Installation
npm
```bash
npm install @ouroboros/react-testing
```

## Using
```javascript
import Testing from '@ouroboros/react-testing';

function App(props) {

	return (
		<Testing />
	);
}
```

## Props

| Name | Type | Required | Description |
|--|--|--|--|
| border | boolean | No | Display a border around the buttons |
