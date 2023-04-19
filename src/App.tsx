import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Contacts} from './Contacts';
import {Event} from './Event';
import {NoMatch} from './NoMatch';
import {About} from './About';
import {Studio} from './Studio';
import {Layout} from './Layout';
import {Shop} from './Shop';


export default function App() {
    return (
        <div>
            <h1>Basic Example</h1>
            <p>
                This example demonstrates some of the core
                features of React Router  including nested
                <code>&lt;Route&gt;</code>s,{" "}
                visits an unrecognized URL.
            </p>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Shop />} />
                    <Route path="about" element={<About />} />
                    <Route path="studio" element={<Studio />} />
                    <Route path="events" element={<Event />} />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </div>
    );
}

