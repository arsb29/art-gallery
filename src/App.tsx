import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Contacts} from './screens/Contacts';
import {Event} from './screens/Event';
import {About} from './screens/About';
import {Studio} from './screens/Studio';
import {Shop} from './screens/Shop';
import {NoMatch} from './NoMatch';
import {Layout} from './Layout';


export default function App() {
    return (
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
    );
}
