window.onload = function () {
    var stage = new Kinetic.Stage({
        container: 'zomboCanvas',
        width: 578,
        height: 200
    });

    var layer = new Kinetic.Layer();

    var circle = new Kinetic.Circle({
        x: stage.getWidth() / 2,
        y: stage.getHeight() / 2,
        radius: 30,
        fill: 'red',
        stroke: 'red',
        strokeWidth: 2
    });

    var outerLayer = new Kinetic.Layer({
        x: 288,
        y: 100,
        offsetX: stage.getWidth() / 2,
        offsetY: stage.getHeight() / 2,
        opacity: 0
    });

    var outerGreenCircle = new Kinetic.Circle({
        x: stage.getWidth() / 2 + 20,
        y: stage.getHeight() / 2 - 60,
        radius: 30,
        fill: 'green',
        stroke: 'green',
        strokeWidth: 2
    });
    var outerYellowCircle = new Kinetic.Circle({
        x: stage.getWidth() / 2 - 20,
        y: stage.getHeight() / 2 + 60,
        radius: 30,
        fill: 'yellow',
        stroke: 'yellow',
        strokeWidth: 2
    });

    var outerBlueCircle = new Kinetic.Circle({
        x: stage.getWidth() / 2 + 45,
        y: stage.getHeight() / 2 + 45,
        radius: 30,
        fill: 'blue',
        stroke: 'blue',
        strokeWidth: 2
    });

    var outerOrangeCircle = new Kinetic.Circle({
        x: stage.getWidth() / 2 - 45,
        y: stage.getHeight() / 2 - 45,
        radius: 30,
        fill: 'orange',
        stroke: 'orange',
        strokeWidth: 2
    });

    var outerPurpleCircle = new Kinetic.Circle({
        x: stage.getWidth() / 2 - 60,
        y: stage.getHeight() / 2 + 15,
        radius: 30,
        fill: 'purple',
        stroke: 'purple',
        strokeWidth: 2
    });

    var outerCyanCircle = new Kinetic.Circle({
        x: stage.getWidth() / 2 + 60,
        y: stage.getHeight() / 2 - 15,
        radius: 30,
        fill: 'cyan',
        stroke: 'cyan',
        strokeWidth: 2
    });


// add the shape to the layer
    layer.add(circle);
    outerLayer.add(outerGreenCircle);
    outerLayer.add(outerYellowCircle);
    outerLayer.add(outerBlueCircle);
    outerLayer.add(outerOrangeCircle);
    outerLayer.add(outerPurpleCircle);
    outerLayer.add(outerCyanCircle);
// add the layer to the stage
    stage.add(layer);
    stage.add(outerLayer);


//##################header

    var zomboHeader = new Kinetic.Stage({
        container: 'zomboHeader',
        width: 578,
        height: 200
    });

    var zLayer = new Kinetic.Layer();

    var simpleText = new Kinetic.Text({
        x: zomboHeader.getWidth() / 2,
        y: zomboHeader.getHeight() / 2,
        offsetX: 160,
        offsetY: 0,
        text: 'ZOMBO.COM',
        fontSize: 64,
        fontFamily: 'sans-serif',
        fill: 'green'
    });

//    zLayer.add(simpleText);
//    zomboHeader.add(zLayer);

//##################### tween


    var tweenOpacity = new Kinetic.Tween({
        node: outerLayer,
        opacity: .2,
        duration: .12,
        onFinish: function () {
            var reverseOpacity = new Kinetic.Tween({
                node: outerLayer,
                opacity: 0,
                duration: .20,
                onFinish: function () {
                    var lightenOpacity = new Kinetic.Tween({
                        node: outerLayer,
                        opacity:.12,
                        duration: .1,
                        onFinish: function () {
                            tweenOpacity.play();
                        }
                    });
                    lightenOpacity.play();
                }
            });
            reverseOpacity.play();
        }
    });


//##################### animation
            var anim = new Kinetic.Animation(function (frame) {
                // move a node to the right at pixels / second
                var velocity = 5;
                var dist = velocity * (frame.timeDiff / 1000);
                outerLayer.rotate(dist);
            }, outerLayer);

            anim.start();
            tweenOpacity.play();
        };


