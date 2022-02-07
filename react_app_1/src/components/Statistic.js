/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function getRandomColor() {
  // to nie moja funkcja, podebrałem ją ze stackoverflow:) https://stackoverflow.com/questions/1484506/random-color-generator
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Statistics(props) {
  const statistics = props.stats;
  const view = statistics.map(statistic => (
    <li
      css={{
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: getRandomColor(),
      }}
      key={statistic.id}
    >
      <span css={{ fontSize: 12, color: 'white' }}>{statistic.label}</span>
      <span css={{ fontSize: 16, color: 'white' }}>{statistic.percentage}%</span>
    </li>
  ));

  return (
    <section
      css={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 345,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
      }}
    >
      <h2
        css={{
          textTransform: 'uppercase',
          fontSize: 18,
          margin: 0,
          paddingTop: 25,
          paddingBottom: 25,
          color: 'rgb(112, 112, 112)',
          backgroundColor: 'white',
        }}
      >
        Upload stats
      </h2>
      <ul css={{ display: 'flex', justifyContent: 'center', padding: 0, margin: 0 }}>{view}</ul>
    </section>
  );
}

export default Statistics;
