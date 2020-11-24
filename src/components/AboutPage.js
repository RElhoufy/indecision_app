import React from 'react';

const AboutPage = () => (
    <div className="page">
        <h1 className="page__title">Welcome to the Indecision App!</h1>
        <h2 className="page__subtitle">Why</h2>
        <p>The goal of this application is to help indecisive people like me decide!!</p>
        <p>The computer decides an option for you from the avaialble options!</p>
        <h2 className="page__subtitle">How</h2>
        <p>In the input bar at the bottom the page, type in whatever your option is. Once you're done press on 'add option'.</p>
        <p>If you've made a mistake don't worry you can simply remove the option by pressing the remove link beside the desired option to remove it.</p>
        <p>What do you do if you're so indecisive and want to change all your options. FEAR NOT, for you can remove all the options by pressing the remove all button and start over.</p>
        <p>Once you're finally happy with the options you've inserted, press on the 'What Should I do' button and the computer will pick an option randomly. The computer is definitley more decisive than you and I.</p>
        <h2 className="page__subtitle">Technical Features</h2>
        <p>The Indecision Application was built entirely using React.js</p>
        <p>Every single element you see on the page are components that are bite-sized and reusable.</p>
        <p>
            The application utilizes the React-Router library to dynamically render different pages on to the screen; known also as client side rendering. Every page you navigate to is being fetched and rendered within the application; The HTTP request is not being sent to a server for it to fetch the requested URL.
        </p>
        <p>For a more detailed description of the technical features of this web application, please view a demo of the application found in the video presentation submitted.</p>
    </div>

);

export default AboutPage;