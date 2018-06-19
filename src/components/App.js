import React from 'react';
import Footer from './Footer';
import AddTodo from '../Containers/AddTodo';
import VisibilityTodoList from '../Containers/VisibileTotoList';

const App = () => (
    <div>
        <AddTodo />
        <VisibilityTodoList />
        <Footer />
    </div>
)

export default App