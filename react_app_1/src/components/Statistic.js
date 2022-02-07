/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Statistics(props) {
    const statistics = props.stats;
    const view = statistics.map(statistic => (
      <li key={statistic.id}>
        <span className="label">{statistic.label}</span>
        <span className="percentage">{statistic.percentage}</span>
      </li>
    ));

    return <section className="statistics">
      <h2 css={{color: 'red'}}>Upload stats</h2>
      <ul className="stat-list">
        {view}
      </ul>
    </section>
}

export default Statistics;
