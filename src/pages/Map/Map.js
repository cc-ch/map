import React, {Component} from 'react';
import DeckGL, {ScatterplotLayer} from 'deck.gl';
import {StaticMap} from 'react-map-gl';

import {MapboxLayer} from '@deck.gl/mapbox';

const INITIAL_VIEW_STATE = {
    longitude: 2.29446,
    latitude: 48.858182,
    zoom: 9
};

export default class Home extends Component {
    state = {};

  // DeckGL and mapbox will both draw into this WebGL context
  _onWebGLInitialized = (gl) => {
    this.setState({gl});
  }

  _onMapLoad = () => {
    const map = this._map;
    const deck = this._deck;

    console.log(map)

    map.addLayer(new MapboxLayer({id: 'my-scatterplot', deck}),"building");

    map.on('click','my-scatterplot',function(e){
        console.log(e);
        console.log(123)
    })
  }

  render() {
    const {gl} = this.state;
    const layers = [
        new ScatterplotLayer({
            id: 'my-scatterplot',
            data: [
                {position: [2.29446,48.858182], size: 100}
            ],
            getPosition: d => d.position,
            getRadius: d => d.size,
            getColor: [255, 0, 0]
        })
    ];

    return (
      <DeckGL
        ref={ref => {
          // save a reference to the Deck instance
          this._deck = ref && ref.deck;
        }}
        layers={layers}
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        onWebGLInitialized={this._onWebGLInitialized}
      >
        {gl && (
          <StaticMap
            ref={ref => {
              // save a reference to the mapboxgl.Map instance
              this._map = ref && ref.getMap();
            }}
            gl={gl}
            mapStyle="mapbox://styles/chenscc/cjqn522qq0ftz2spohj0jwhpo"
            mapboxApiAccessToken= "pk.eyJ1IjoiY2hlbnNjYyIsImEiOiJjam9uMGJ6MzQwcTVsM2tsZWV5bGF2Z2RrIn0.Op4ZorqKS4XNYsDr27OOAg"
            onLoad={this._onMapLoad}
          />
        )}
      </DeckGL>
    );
  }
}