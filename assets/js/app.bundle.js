/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

fetch('https://gist.githubusercontent.com/vergilius/6d869a7448e405cb52d782120b77b82c/raw/e75dc7c19b918a9f0f5684595899dba2e5ad4f43/history-flashcards.json').then(function (resp) {
	return resp.json();
}).then(function (resp) {
	createElements(resp);
});

function createElements(card) {
	var cardContainer = document.getElementsByClassName("card__text")[0];
	var question = document.createElement("h2");
	question.classList = "card__question sg-header-primary sg-header-primary--small";

	var answerFirst = document.createElement("p");
	answerFirst.classList = "card__answer sg-header-secondary";
	var answerSecond = document.createElement("p");
	answerSecond.classList = "card__answer sg-header-secondary";

	appendElements(card, cardContainer, question, answerFirst, answerSecond);
}

function appendElements(card, cardContainer, question, answerFirst, answerSecond) {
	cardContainer.textContent = "";
	cardContainer.appendChild(question);
	cardContainer.appendChild(answerFirst);
	cardContainer.appendChild(answerSecond);

	inputData(card, question, answerFirst, answerSecond);
}

function inputData(card, question, answerFirst, answerSecond) {
	var cardFirst = card[0];
	question.textContent = cardFirst.question;
	answerFirst.textContent = cardFirst.answers[0].answer;
	answerSecond.textContent = cardFirst.answers[1].answer;

	eventListener(card, cardFirst);
}

function eventListener(card, cardFirst) {
	var allAnswers = document.getElementsByClassName("card__answer");

	var _loop = function _loop(i) {
		allAnswers[i].addEventListener('click', function () {
			checkAnswer(i, cardFirst, card, allAnswers);
		}, false);
	};

	for (var i = 0; i < allAnswers.length; i++) {
		_loop(i);
	}
}

function checkAnswer(i, cardFirst, card) {
	if (cardFirst.answers[i].correct == true) {
		card.splice(0, 1);
	} else {
		card.push(card.shift());
	}

	createElements(card);
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmQ3MjIwMzc3YTQ3YWUyYzc3ZTUiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIl0sIm5hbWVzIjpbImZldGNoIiwidGhlbiIsInJlc3AiLCJqc29uIiwiY3JlYXRlRWxlbWVudHMiLCJjYXJkIiwiY2FyZENvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInF1ZXN0aW9uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFuc3dlckZpcnN0IiwiYW5zd2VyU2Vjb25kIiwiYXBwZW5kRWxlbWVudHMiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwiaW5wdXREYXRhIiwiY2FyZEZpcnN0IiwiYW5zd2VycyIsImFuc3dlciIsImV2ZW50TGlzdGVuZXIiLCJhbGxBbnN3ZXJzIiwiaSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGVja0Fuc3dlciIsImxlbmd0aCIsImNvcnJlY3QiLCJzcGxpY2UiLCJwdXNoIiwic2hpZnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQTs7QUFFQUEsTUFBTSxvSkFBTixFQUNLQyxJQURMLENBQ1U7QUFBQSxRQUFRQyxLQUFLQyxJQUFMLEVBQVI7QUFBQSxDQURWLEVBRUtGLElBRkwsQ0FFVSxnQkFBUTtBQUNWRyxnQkFBZUYsSUFBZjtBQUNILENBSkw7O0FBTUEsU0FBU0UsY0FBVCxDQUF3QkMsSUFBeEIsRUFBNkI7QUFDNUIsS0FBTUMsZ0JBQWdCQyxTQUFTQyxzQkFBVCxDQUFnQyxZQUFoQyxFQUE4QyxDQUE5QyxDQUF0QjtBQUNBLEtBQU1DLFdBQVdGLFNBQVNHLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBakI7QUFDQUQsVUFBU0UsU0FBVCxHQUFxQiwyREFBckI7O0FBRUEsS0FBTUMsY0FBY0wsU0FBU0csYUFBVCxDQUF1QixHQUF2QixDQUFwQjtBQUNBRSxhQUFZRCxTQUFaLEdBQXdCLGtDQUF4QjtBQUNBLEtBQU1FLGVBQWVOLFNBQVNHLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBckI7QUFDQUcsY0FBYUYsU0FBYixHQUF5QixrQ0FBekI7O0FBRUFHLGdCQUFlVCxJQUFmLEVBQXFCQyxhQUFyQixFQUFvQ0csUUFBcEMsRUFBOENHLFdBQTlDLEVBQTJEQyxZQUEzRDtBQUNBOztBQUVELFNBQVNDLGNBQVQsQ0FBd0JULElBQXhCLEVBQThCQyxhQUE5QixFQUE2Q0csUUFBN0MsRUFBdURHLFdBQXZELEVBQW9FQyxZQUFwRSxFQUFpRjtBQUNoRlAsZUFBY1MsV0FBZCxHQUE0QixFQUE1QjtBQUNBVCxlQUFjVSxXQUFkLENBQTBCUCxRQUExQjtBQUNBSCxlQUFjVSxXQUFkLENBQTBCSixXQUExQjtBQUNBTixlQUFjVSxXQUFkLENBQTBCSCxZQUExQjs7QUFFQUksV0FBVVosSUFBVixFQUFnQkksUUFBaEIsRUFBMEJHLFdBQTFCLEVBQXVDQyxZQUF2QztBQUNBOztBQUVELFNBQVNJLFNBQVQsQ0FBbUJaLElBQW5CLEVBQXlCSSxRQUF6QixFQUFtQ0csV0FBbkMsRUFBZ0RDLFlBQWhELEVBQTZEO0FBQzVELEtBQU1LLFlBQVliLEtBQUssQ0FBTCxDQUFsQjtBQUNBSSxVQUFTTSxXQUFULEdBQXVCRyxVQUFVVCxRQUFqQztBQUNBRyxhQUFZRyxXQUFaLEdBQTBCRyxVQUFVQyxPQUFWLENBQWtCLENBQWxCLEVBQXFCQyxNQUEvQztBQUNBUCxjQUFhRSxXQUFiLEdBQTJCRyxVQUFVQyxPQUFWLENBQWtCLENBQWxCLEVBQXFCQyxNQUFoRDs7QUFFQUMsZUFBY2hCLElBQWQsRUFBb0JhLFNBQXBCO0FBQ0E7O0FBRUQsU0FBU0csYUFBVCxDQUF1QmhCLElBQXZCLEVBQTZCYSxTQUE3QixFQUF1QztBQUN0QyxLQUFNSSxhQUFhZixTQUFTQyxzQkFBVCxDQUFnQyxjQUFoQyxDQUFuQjs7QUFEc0MsNEJBRzlCZSxDQUg4QjtBQUlsQ0QsYUFBV0MsQ0FBWCxFQUFjQyxnQkFBZCxDQUErQixPQUEvQixFQUF3QyxZQUFVO0FBQ3BEQyxlQUFZRixDQUFaLEVBQWVMLFNBQWYsRUFBMEJiLElBQTFCLEVBQWdDaUIsVUFBaEM7QUFDQSxHQUZFLEVBRUEsS0FGQTtBQUprQzs7QUFHdEMsTUFBSSxJQUFJQyxJQUFJLENBQVosRUFBZUEsSUFBSUQsV0FBV0ksTUFBOUIsRUFBc0NILEdBQXRDLEVBQTBDO0FBQUEsUUFBbENBLENBQWtDO0FBSXpDO0FBQ0Q7O0FBRUQsU0FBU0UsV0FBVCxDQUFxQkYsQ0FBckIsRUFBd0JMLFNBQXhCLEVBQW1DYixJQUFuQyxFQUF3QztBQUN2QyxLQUFHYSxVQUFVQyxPQUFWLENBQWtCSSxDQUFsQixFQUFxQkksT0FBckIsSUFBZ0MsSUFBbkMsRUFBd0M7QUFDdkN0QixPQUFLdUIsTUFBTCxDQUFZLENBQVosRUFBYyxDQUFkO0FBQ0EsRUFGRCxNQUdJO0FBQ0h2QixPQUFLd0IsSUFBTCxDQUFVeEIsS0FBS3lCLEtBQUwsRUFBVjtBQUNBOztBQUVEMUIsZ0JBQWVDLElBQWY7QUFDQSxDOzs7Ozs7QUMxREQseUMiLCJmaWxlIjoiLi9hc3NldHMvanMvYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGZkNzIyMDM3N2E0N2FlMmM3N2U1IiwiaW1wb3J0ICcuL2Fzc2V0cy9zY3NzL2FwcC5zY3NzJztcblxuZmV0Y2goJ2h0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20vdmVyZ2lsaXVzLzZkODY5YTc0NDhlNDA1Y2I1MmQ3ODIxMjBiNzdiODJjL3Jhdy9lNzVkYzdjMTliOTE4YTlmMGY1Njg0NTk1ODk5ZGJhMmU1YWQ0ZjQzL2hpc3RvcnktZmxhc2hjYXJkcy5qc29uJylcbiAgICAudGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxuICAgIC50aGVuKHJlc3AgPT4ge1xuICAgICAgICBjcmVhdGVFbGVtZW50cyhyZXNwKVxuICAgIH0pO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50cyhjYXJkKXtcblx0Y29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJkX190ZXh0XCIpWzBdO1xuXHRjb25zdCBxdWVzdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcblx0cXVlc3Rpb24uY2xhc3NMaXN0ID0gXCJjYXJkX19xdWVzdGlvbiBzZy1oZWFkZXItcHJpbWFyeSBzZy1oZWFkZXItcHJpbWFyeS0tc21hbGxcIjtcblx0XG5cdGNvbnN0IGFuc3dlckZpcnN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGFuc3dlckZpcnN0LmNsYXNzTGlzdCA9IFwiY2FyZF9fYW5zd2VyIHNnLWhlYWRlci1zZWNvbmRhcnlcIjtcblx0Y29uc3QgYW5zd2VyU2Vjb25kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGFuc3dlclNlY29uZC5jbGFzc0xpc3QgPSBcImNhcmRfX2Fuc3dlciBzZy1oZWFkZXItc2Vjb25kYXJ5XCI7XG5cdFx0XG5cdGFwcGVuZEVsZW1lbnRzKGNhcmQsIGNhcmRDb250YWluZXIsIHF1ZXN0aW9uLCBhbnN3ZXJGaXJzdCwgYW5zd2VyU2Vjb25kKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kRWxlbWVudHMoY2FyZCwgY2FyZENvbnRhaW5lciwgcXVlc3Rpb24sIGFuc3dlckZpcnN0LCBhbnN3ZXJTZWNvbmQpe1xuXHRjYXJkQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcblx0Y2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdGlvbik7XG5cdGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoYW5zd2VyRmlyc3QpO1xuXHRjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGFuc3dlclNlY29uZCk7XG5cdFxuXHRpbnB1dERhdGEoY2FyZCwgcXVlc3Rpb24sIGFuc3dlckZpcnN0LCBhbnN3ZXJTZWNvbmQpO1xufVxuXG5mdW5jdGlvbiBpbnB1dERhdGEoY2FyZCwgcXVlc3Rpb24sIGFuc3dlckZpcnN0LCBhbnN3ZXJTZWNvbmQpe1xuXHRjb25zdCBjYXJkRmlyc3QgPSBjYXJkWzBdO1xuXHRxdWVzdGlvbi50ZXh0Q29udGVudCA9IGNhcmRGaXJzdC5xdWVzdGlvbjtcblx0YW5zd2VyRmlyc3QudGV4dENvbnRlbnQgPSBjYXJkRmlyc3QuYW5zd2Vyc1swXS5hbnN3ZXI7XG5cdGFuc3dlclNlY29uZC50ZXh0Q29udGVudCA9IGNhcmRGaXJzdC5hbnN3ZXJzWzFdLmFuc3dlcjtcblx0XG5cdGV2ZW50TGlzdGVuZXIoY2FyZCwgY2FyZEZpcnN0KTtcbn1cblxuZnVuY3Rpb24gZXZlbnRMaXN0ZW5lcihjYXJkLCBjYXJkRmlyc3Qpe1xuXHRjb25zdCBhbGxBbnN3ZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhcmRfX2Fuc3dlclwiKTtcblx0XG5cdGZvcihsZXQgaSA9IDA7IGkgPCBhbGxBbnN3ZXJzLmxlbmd0aDsgaSsrKXtcbiAgICBcdGFsbEFuc3dlcnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdFx0Y2hlY2tBbnN3ZXIoaSwgY2FyZEZpcnN0LCBjYXJkLCBhbGxBbnN3ZXJzKTtcblx0XHR9LCBmYWxzZSlcblx0fVxufVxuXG5mdW5jdGlvbiBjaGVja0Fuc3dlcihpLCBjYXJkRmlyc3QsIGNhcmQpe1x0XG5cdGlmKGNhcmRGaXJzdC5hbnN3ZXJzW2ldLmNvcnJlY3QgPT0gdHJ1ZSl7XG5cdFx0Y2FyZC5zcGxpY2UoMCwxKTtcblx0fVxuXHRlbHNle1xuXHRcdGNhcmQucHVzaChjYXJkLnNoaWZ0KCkpO1xuXHR9XG5cblx0Y3JlYXRlRWxlbWVudHMoY2FyZCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3Njc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==