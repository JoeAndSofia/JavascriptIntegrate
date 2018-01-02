var movement = {
    defaultMoveKey:{
        0:87,
        1:68,
        2:83,
        3:65,
        4:38,
        5:40,
        6:37,
        7:39,
    },
    moveDesc:{
        up_lt:0,
        right_lt:1,
        down_lt:2,
        left_lt:3,
        up_ar:4,
        down_ar:5,
        turn_left_ar:6,
        turn_right_ar:7,
    },
    applyAction:{
        keyMove:function(element){
            if(element){
                element.addEventListener("keydown", function(event){
                    var ele = this
                    if(element.dataset.moveIndex){
                        clearInterval(parseInt(element.dataset.moveIndex))
                    }
                    // console.log(event.isComposing, event.altKey, event.ctrlKey, event.metaKey, event.shiftKey)
                    if(!event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey){
                        // console.log(event.code, event.keyCode, event.which, event);
                        // event.preventDefault();  //disable when developing
                        var ele_cs = getComputedStyle(ele)
                        switch (event.keyCode){
                            case movement.defaultMoveKey[movement.moveDesc.up_lt]:
                                movement.moveSeal.moveY(ele, ele_cs, -1);
                                break;
                            case movement.defaultMoveKey[movement.moveDesc.right_lt]:
                                movement.moveSeal.moveX(ele, ele_cs, 1);
                                break;
                            case movement.defaultMoveKey[movement.moveDesc.down_lt]:
                                movement.moveSeal.moveY(ele, ele_cs, 1);
                                break;
                            case movement.defaultMoveKey[movement.moveDesc.left_lt]:
                                movement.moveSeal.moveX(ele, ele_cs, -1);
                                break;
                            case movement.defaultMoveKey[movement.moveDesc.up_ar]:
                                movement.moveSeal.moveY(ele, ele_cs, -1);
                                break;
                            case movement.defaultMoveKey[movement.moveDesc.down_ar]:
                                movement.moveSeal.moveY(ele, ele_cs, 1);
                                break;
                            case movement.defaultMoveKey[movement.moveDesc.turn_left_ar]:
                                movement.moveSeal.moveX(ele, ele_cs, -1);
                                break;
                            case movement.defaultMoveKey[movement.moveDesc.turn_right_ar]:
                                movement.moveSeal.moveX(ele, ele_cs, 1);
                                break;
                        }
                    }
                });
                element.focus();
            }
        },
        mouseMove:function(element){
            if(element && element.offsetParent){
                var offsetParent = element.offsetParent
                offsetParent.addEventListener("mousedown", function(event){
                    if(offsetParent === event.target){
                        var ele_cs = getComputedStyle(element);
                        movement.moveSeal.moveToPoint(element, ele_cs, event.offsetX, event.offsetY, 1.2);
                    }
                });
            }

        }
    },
    moveSeal:{
        moveY:function(element, computedStyle, distanceY){
            element.style.top = (parseFloat(computedStyle.top) + distanceY) + 'px'
        },
        moveX:function(element, computedStyle, distanceX){
            element.style.left = ((parseFloat(computedStyle.left) + distanceX) + 'px');
        },
        adjustToPoint:function(element, targetX, targetY){
            element.style.left = targetX + 'px';
            element.style.top = targetY + 'px';
        },
        moveToPoint:function(element, computedStyle, targetX, targetY, speed){
            if(element.dataset.moveIndex){
                clearInterval(parseInt(element.dataset.moveIndex))
            }
            var targetLeft = targetX - (parseFloat(computedStyle.width)/2);
            var targetTop = targetY - (parseFloat(computedStyle.height)/2);
            var currentLeft = parseFloat(computedStyle.left);
            var currentTop = parseFloat(computedStyle.top);
            var distance_x = targetLeft - currentLeft
            var distance_y = targetTop - currentTop
            if(Math.abs(distance_x) < 0.0001 && Math.abs(distance_y) < 0.0001){
                return;
            }
            var distance = Math.sqrt(Math.pow(distance_x,2) + Math.pow(distance_y,2))
            var step_x = (distance_x / distance).toFixed(4) * speed
            var step_y = (distance_y / distance).toFixed(4) * speed
            // console.log(step_x, step_y);
            // console.log(targetLeft, targetTop)
            function move(){
                movement.moveSeal.moveX(element, computedStyle, step_x)
                movement.moveSeal.moveY(element, computedStyle, step_y)
                if(step_x < 0){
                    if(parseFloat(computedStyle.left) <= targetLeft){
                        return true;
                    }
                }else if(step_x > 0){
                    if(parseFloat(computedStyle.left) >= targetLeft){
                        return true;
                    }
                }else if(step_y < 0){
                    if(parseFloat(computedStyle.top) <= targetTop){
                        return true;
                    }
                }else if(step_y > 0){
                    if(parseFloat(computedStyle.top) >= targetTop){
                        return true;
                    }
                }else if(step_y == 0){
                    return true;
                }
            }
            if(move()){

            }else{
                var moveIndex = setInterval(function(){
                    element.dataset.moveIndex = moveIndex
                    if(move()){
                        movement.moveSeal.adjustToPoint(element, targetLeft, targetTop);
                        clearInterval(moveIndex)
                    }
                    element.focus();
                }, 25);
            }

        },
        rotate:function(element, degree){

        }
    },
}