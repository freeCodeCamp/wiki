import React from 'react';
import { RouteHandler, Link, State } from 'react-router';
import { Container, Grid, Breakpoint, Span } from 'react-responsive-grid';
import colorPairsPicker from 'color-pairs-picker';
import chroma from 'chroma-js';
import includes from 'underscore.string/include';
import { link } from 'gatsby-helpers';

import typography from 'utils/typography';

// Style code
import 'css/github.css';

const { rhythm, fontSizeToPx } = typography;

module.exports = React.createClass({
  mixins: [State],
  render: function() {
    var activeHeaderColors, darker, docsActive, examplesActive, headerColors, ref1, ref2, routes
    headerColors = colorPairsPicker(this.props.config.headerColor, {
      contrast: 5.5
    });
    darker = chroma(this.props.config.headerColor).darken(9).hex();
    activeHeaderColors = colorPairsPicker(darker, {
      contrast: 7
    });

    routes = this.getRoutes().map(function(route) {
      return route.path;
    });
    docsActive = (routes.indexOf(link("/docs/")) >= 0);

    return (
      <div>
        <div
          style={{
            background: headerColors.bg,
            color: headerColors.fg,
            marginBottom: rhythm(1.5)
          }}
        >
          <Container
            style={{
              maxWidth: 960,
              padding: `${rhythm(1/2)}`,
              paddingBottom: `${rhythm(1/2)}`
            }}
          >
            <Grid
              columns={12}
              style={{
                padding: `${rhythm(1/2)} 0`
              }}
            >
              <Span
                columns={4}
                style={{
                  height: 24 // Ugly hack. How better to constrain height of div?
                }}
              >
                <Link
                  to={link('/')}
                  style={{
                    textDecoration: 'none',
                    color: headerColors.fg,
                    fontSize: fontSizeToPx("25.5px").fontSize
                  }}
                >
                  {this.props.config.siteTitle}
                </Link>
              </Span>
              <Span columns={8} last={true}>
                <a
                  style={{
                    float: 'right',
                    color: headerColors.fg,
                    textDecoration: 'none',
                    marginLeft: rhythm(1/2)
                  }}
                  href="https://github.com/gatsbyjs/gatsby"
                >
                  Github
                </a>
                <Link
                  to={link('/docs/')}
                  style={{
                    background: docsActive ? activeHeaderColors.bg : headerColors.bg,
                    color: docsActive ? activeHeaderColors.fg : headerColors.fg,
                    float: 'right',
                    textDecoration: 'none',
                    paddingLeft: rhythm(1/2),
                    paddingRight: rhythm(1/2),
                    paddingBottom: rhythm(1),
                    marginBottom: rhythm(-1),
                    paddingTop: rhythm(1),
                    marginTop: rhythm(-1)
                  }}
                >
                  Documentation
                </Link>
              </Span>
            </Grid>
          </Container>
        </div>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(1/2)}`,
            paddingTop: 0
          }}
        >
          <RouteHandler {...this.props}/>
        </Container>
      </div>
    );
  }
});
