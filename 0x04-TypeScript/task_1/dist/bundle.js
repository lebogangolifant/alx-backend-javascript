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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// Function to create a Teacher object
var createTeacher = function (teacherInfo) {
    var firstName = teacherInfo.firstName, lastName = teacherInfo.lastName, fullTimeEmployee = teacherInfo.fullTimeEmployee, yearsOfExperience = teacherInfo.yearsOfExperience, location = teacherInfo.location, rest = __rest(teacherInfo, ["firstName", "lastName", "fullTimeEmployee", "yearsOfExperience", "location"]);
    return __assign({ firstName: firstName,
        lastName: lastName,
        fullTimeEmployee: fullTimeEmployee,
        yearsOfExperience: yearsOfExperience,
        location: location }, rest);
};
// Function to create a Director object
var createDirector = function (directorInfo) {
    var firstName = directorInfo.firstName, lastName = directorInfo.lastName, fullTimeEmployee = directorInfo.fullTimeEmployee, yearsOfExperience = directorInfo.yearsOfExperience, location = directorInfo.location, numberOfReports = directorInfo.numberOfReports, rest = __rest(directorInfo, ["firstName", "lastName", "fullTimeEmployee", "yearsOfExperience", "location", "numberOfReports"]);
    return __assign({ firstName: firstName,
        lastName: lastName,
        fullTimeEmployee: fullTimeEmployee,
        yearsOfExperience: yearsOfExperience,
        location: location,
        numberOfReports: numberOfReports }, rest);
};
// Example usage
var teacher3 = createTeacher({
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
});
console.log(teacher3);
// Example usage for Directors
var director1 = createDirector({
    firstName: 'John',
    fullTimeEmployee: true,
    lastName: 'Doe',
    location: 'London',
    numberOfReports: 17,
});
console.log(director1);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBLHNDQUFzQztBQUN0QyxJQUFNLGFBQWEsR0FBRyxVQUFDLFdBQW9CO0lBQy9CLGFBQVMsR0FBdUUsV0FBVyxVQUFsRixFQUFFLFFBQVEsR0FBNkQsV0FBVyxTQUF4RSxFQUFFLGdCQUFnQixHQUEyQyxXQUFXLGlCQUF0RCxFQUFFLGlCQUFpQixHQUF3QixXQUFXLGtCQUFuQyxFQUFFLFFBQVEsR0FBYyxXQUFXLFNBQXpCLEVBQUssSUFBSSxVQUFLLFdBQVcsRUFBN0YsOEVBQStFLENBQUYsQ0FBaUI7SUFDcEcsa0JBQ0ksU0FBUztRQUNULFFBQVE7UUFDUixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLFFBQVEsY0FDTCxJQUFJLEVBQ1Q7QUFDTixDQUFDLENBQUM7QUFFRix1Q0FBdUM7QUFDdkMsSUFBTSxjQUFjLEdBQUcsVUFBQyxZQUF1QjtJQUNuQyxhQUFTLEdBQXdGLFlBQVksVUFBcEcsRUFBRSxRQUFRLEdBQThFLFlBQVksU0FBMUYsRUFBRSxnQkFBZ0IsR0FBNEQsWUFBWSxpQkFBeEUsRUFBRSxpQkFBaUIsR0FBeUMsWUFBWSxrQkFBckQsRUFBRSxRQUFRLEdBQStCLFlBQVksU0FBM0MsRUFBRSxlQUFlLEdBQWMsWUFBWSxnQkFBMUIsRUFBSyxJQUFJLFVBQUssWUFBWSxFQUEvRyxpR0FBZ0csQ0FBRixDQUFrQjtJQUN0SCxrQkFDSSxTQUFTO1FBQ1QsUUFBUTtRQUNSLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsUUFBUTtRQUNSLGVBQWUscUJBQ1osSUFBSSxFQUNUO0FBQ04sQ0FBQyxDQUFDO0FBRUYsZ0JBQWdCO0FBQ2hCLElBQU0sUUFBUSxHQUFZLGFBQWEsQ0FBQztJQUNwQyxTQUFTLEVBQUUsTUFBTTtJQUNqQixnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLEtBQUs7Q0FDbEIsQ0FBQyxDQUFDO0FBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUV0Qiw4QkFBOEI7QUFDOUIsSUFBTSxTQUFTLEdBQWMsY0FBYyxDQUFDO0lBQ3hDLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixlQUFlLEVBQUUsRUFBRTtDQUN0QixDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvbWFpbi50c1wiKTtcbiIsIi8vIFRlYWNoZXIgaW50ZXJmYWNlIHdpdGggc3BlY2lmaWVkIGF0dHJpYnV0ZXMgYW5kIGR5bmFtaWMgcHJvcGVydHlcbmludGVyZmFjZSBUZWFjaGVyIHtcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuICAgIGZ1bGxUaW1lRW1wbG95ZWU6IGJvb2xlYW47XG4gICAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXI7XG4gICAgbG9jYXRpb246IHN0cmluZztcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbi8vIERpcmVjdG9ycyBpbnRlcmZhY2UgZXh0ZW5kaW5nIFRlYWNoZXJcbmludGVyZmFjZSBEaXJlY3RvcnMgZXh0ZW5kcyBUZWFjaGVyIHtcbiAgICBudW1iZXJPZlJlcG9ydHM6IG51bWJlcjtcbn1cblxuLy8gRnVuY3Rpb24gdG8gY3JlYXRlIGEgVGVhY2hlciBvYmplY3RcbmNvbnN0IGNyZWF0ZVRlYWNoZXIgPSAodGVhY2hlckluZm86IFRlYWNoZXIpOiBUZWFjaGVyID0+IHtcbiAgICBjb25zdCB7IGZpcnN0TmFtZSwgbGFzdE5hbWUsIGZ1bGxUaW1lRW1wbG95ZWUsIHllYXJzT2ZFeHBlcmllbmNlLCBsb2NhdGlvbiwgLi4ucmVzdCB9ID0gdGVhY2hlckluZm87XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZmlyc3ROYW1lLFxuICAgICAgICBsYXN0TmFtZSxcbiAgICAgICAgZnVsbFRpbWVFbXBsb3llZSxcbiAgICAgICAgeWVhcnNPZkV4cGVyaWVuY2UsXG4gICAgICAgIGxvY2F0aW9uLFxuICAgICAgICAuLi5yZXN0LFxuICAgIH07XG59O1xuXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgYSBEaXJlY3RvciBvYmplY3RcbmNvbnN0IGNyZWF0ZURpcmVjdG9yID0gKGRpcmVjdG9ySW5mbzogRGlyZWN0b3JzKTogRGlyZWN0b3JzID0+IHtcbiAgICBjb25zdCB7IGZpcnN0TmFtZSwgbGFzdE5hbWUsIGZ1bGxUaW1lRW1wbG95ZWUsIHllYXJzT2ZFeHBlcmllbmNlLCBsb2NhdGlvbiwgbnVtYmVyT2ZSZXBvcnRzLCAuLi5yZXN0IH0gPSBkaXJlY3RvckluZm87XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZmlyc3ROYW1lLFxuICAgICAgICBsYXN0TmFtZSxcbiAgICAgICAgZnVsbFRpbWVFbXBsb3llZSxcbiAgICAgICAgeWVhcnNPZkV4cGVyaWVuY2UsXG4gICAgICAgIGxvY2F0aW9uLFxuICAgICAgICBudW1iZXJPZlJlcG9ydHMsXG4gICAgICAgIC4uLnJlc3QsXG4gICAgfTtcbn07XG5cbi8vIEV4YW1wbGUgdXNhZ2VcbmNvbnN0IHRlYWNoZXIzOiBUZWFjaGVyID0gY3JlYXRlVGVhY2hlcih7XG4gICAgZmlyc3ROYW1lOiAnSm9obicsXG4gICAgZnVsbFRpbWVFbXBsb3llZTogZmFsc2UsXG4gICAgbGFzdE5hbWU6ICdEb2UnLFxuICAgIGxvY2F0aW9uOiAnTG9uZG9uJyxcbiAgICBjb250cmFjdDogZmFsc2UsXG59KTtcblxuY29uc29sZS5sb2codGVhY2hlcjMpO1xuXG4vLyBFeGFtcGxlIHVzYWdlIGZvciBEaXJlY3RvcnNcbmNvbnN0IGRpcmVjdG9yMTogRGlyZWN0b3JzID0gY3JlYXRlRGlyZWN0b3Ioe1xuICAgIGZpcnN0TmFtZTogJ0pvaG4nLFxuICAgIGZ1bGxUaW1lRW1wbG95ZWU6IHRydWUsXG4gICAgbGFzdE5hbWU6ICdEb2UnLFxuICAgIGxvY2F0aW9uOiAnTG9uZG9uJyxcbiAgICBudW1iZXJPZlJlcG9ydHM6IDE3LFxufSk7XG5cbmNvbnNvbGUubG9nKGRpcmVjdG9yMSk7XG4iXSwic291cmNlUm9vdCI6IiJ9