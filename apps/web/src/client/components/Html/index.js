import React from 'react'

export const Html = ({ content, state, assets, isProduction, env }) => {
  return (
    <html lang="">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet="utf-8" />
        <meta name="robots" content="noindex" />
        <title>NO-INDEX - FROM GOOGLE - Welcome to PanelPunches</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Make of die cast machines from USA" />
        <meta name="keywords" content="panel punches, die sets, Hydraulic Pulling Equipment, Pulling Accessories, Replacement Parts" />

        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
          integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"
          integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF"
          crossOrigin="anonymous"
        />
        {assets.client.css ? <link rel="stylesheet" href={assets.client.css} /> : ''}
        {isProduction ? <script src={assets.client.js} defer /> : <script src={assets.client.js} defer crossOrigin="true" />}
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, '\\u003c')};`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__ENV__=${JSON.stringify(env).replace(/</g, '\\u003c')};`,
          }}
        />
      </body>
    </html>
  )
}
