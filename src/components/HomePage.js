import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Jumbotron, Col, Row, Button } from 'react-bootstrap/';

import { Canvas, useFrame } from 'react-three-fiber';
import { ambientLight } from 'three';
import { MeshWobbleMaterial, OrbitControls } from 'drei';
import { a, useSpring } from 'react-spring/three';


const SpinningMesh = ({ position, args, color, speed }) => {
  const mesh = useRef(null)
  // useFrame() must always be in its own component
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01 )); 

  const [expand, setExpand] = useState(false);

  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  return(
    <a.mesh onClick={() => setExpand(!expand)} scale={props.scale} position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial attach="material" color={color} speed={speed} factor={0.2} />
    </a.mesh>
  )
}


class HomePage extends React.Component {

  render() {
    return (
        <>
          <Jumbotron className="jumbotron jumbotron-fluid">
            <Row>
              <Col>
                <div className="j-column">
                  <h2 className="centered-jumbo ml-auto display-2">Quality Website Creation</h2>
                  <h3 className="font-weight-light display-4 subTitle">Scale your business.</h3>
                  <div className="btn-div">
                    <Button className="hire-btn" variant="outline-dark" size="lg" href="/services" block>See Our Services</Button>
                  </div>
                </div>
              </Col>
              <Col>


              <Canvas colorManagement camera={{position: [30, 30, 5], fov: 20, near: 0.2, far: 2000}} className="canvas"  >
                <ambientLight intensity={0.2} />
                <directionalLight 
                  position={[0, 10, 0]} 
                  intensity={1} 
                />

                <group>
                  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 10]} >
                    {/* to cast a shadow */}
                    {/* <planeBufferGeometry attach="geometry" args={[100, 100]} /> */}
                    {/* <shadowMaterial attach="material" opacity={0.4} /> */}
                  </mesh>

                  <SpinningMesh position={[5, 5, 0]} args={[5, 5, 5]} color="#FF6400" speed={4} />
                  {/* <SpinningMesh position={[-2, 1, -5]} color="lightblue" speed={6} />
                  <SpinningMesh position={[5, 1, -2]} color="pink" speed={6} /> */}

                </group>

                <pointLight position={[-10, 0, -20]} intensity={0.5} />
                <pointLight position={[0, -10, 0]} intensity={1} />

                <OrbitControls enableZoom={false} />
            </Canvas>
              </Col>
            </Row>

          </Jumbotron>
          
          <div className="idkyet">

          </div>
        </>
    );
  }
}


export default HomePage;
