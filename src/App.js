import React from 'react' ;
import Greeter from './Greeter'; 

function App() {
	return (
		<div style={{
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
			 color: 'blue'
        }}>
		<h1>Fjorian Musaraj , Student Id 101462447</h1>
		<Greeter /> {/* USE THIS COMPONENT */}
		</div>
	);
}

export default App;
