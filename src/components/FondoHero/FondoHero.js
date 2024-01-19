import "./FondoHero.css"
import React, { useEffect } from 'react';

const FondoHero = () => {
    useEffect(() => {
        const TWO_PI = Math.PI * 2;

        class Application {
            constructor() {
                this.canvas = document.getElementById("canvas");
                this.context = this.canvas.getContext("2d");
                this.width = this.canvas.width = window.innerWidth;
                this.height = this.canvas.height = window.innerHeight;
                this.center = {
                    x: this.width / 2,
                    y: this.height / 2
                };

                this.circleContainers = [];

                window.addEventListener('resize', () => this.resizeCanvas(), false);
            }

            resizeCanvas() {
                this.width = this.canvas.width = window.innerWidth;
                this.height = this.canvas.height = window.innerHeight;
                this.center = {
                    x: this.width / 2,
                    y: this.height / 2
                };

                this.circleContainers = [];
                this.initializeCircleContainers();
            }

            initializeCircleContainers() {
                for (let x = 0; x < this.width + 100; x += 190) {
                    for (let y = 0; y < this.height + 100; y += 190) {
                        let circleContainer = new CircleContainer(this.context, x, y);
                        circleContainer.initializeCircles();
                        this.circleContainers.push(circleContainer);
                    }
                }
            }

            update() {
                for (let i = 0; i < this.circleContainers.length; i++) {
                    this.circleContainers[i].update();
                }
            }

            render() {
                this.context.clearRect(0, 0, this.width, this.height);

                for (let i = 0; i < this.circleContainers.length; i++) {
                    this.circleContainers[i].render();
                }
            }

            loop() {
                this.update();
                this.render();

                window.requestAnimationFrame(() => this.loop());
            }
        }

        class CircleContainer {
            constructor(context, x, y) {
                this.context = context;
                this.position = { x, y };
                this.numberOfCircles = 10;
                this.circles = [];
                this.baseRadius = 20;
                this.bounceRadius =150;
                this.singleSlice = TWO_PI / this.numberOfCircles;
            }

            initializeCircles() {
                for (let i = 0; i < this.numberOfCircles; i++) {
                    this.circles.push(new Circle(this.position.x, this.position.y + Math.random(), this.baseRadius, this.bounceRadius, i * this.singleSlice));
                }
            }

            update() {
                for (let i = 0; i < this.numberOfCircles; i++) {
                    this.circles[i].update(this.context);
                }
            }

            render() {
                for (let i = 0; i < this.numberOfCircles; i++) {
                    this.circles[i].render(this.context);
                }
            }
        }

        class Circle {
            constructor(x, y, baseRadius, bounceRadius, angleCircle) {
                this.basePosition = { x, y };
                this.position = { x, y };
                this.speed = 0.004;
                this.baseSize = 10;
                this.size = 10;
                this.angle = (x + y);
                this.baseRadius = baseRadius;
                this.bounceRadius = bounceRadius;
                this.angleCircle = angleCircle;
            }

            update() {
                this.position.x = this.basePosition.x + Math.cos(this.angleCircle) * (Math.sin(this.angle + this.angleCircle) * this.bounceRadius + this.baseRadius);
                this.position.y = this.basePosition.y + Math.sin(this.angleCircle) * (Math.sin(this.angle + this.angleCircle) * this.bounceRadius + this.baseRadius);
                this.size = Math.cos(this.angle) * 8 + this.baseSize;

                this.angle += this.speed;
            }

            render(context) {
                context.fillStyle = "hsl(188, 100%, " + this.size * 4 + "%)";
                context.beginPath();
                context.arc(this.position.x, this.position.y, this.size, 0, TWO_PI);
                context.fill();
            }
        }

        const application = new Application();
        application.initializeCircleContainers();
        application.loop();

        return () => {
        };
    }, []);

    return (
        <div className="fondoHero">
            <canvas id="canvas">Your browser doesn't support canvas</canvas>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                {/* ... (copia el contenido SVG aquí) */}
            </svg>
        </div>
    );
};

export default FondoHero;
