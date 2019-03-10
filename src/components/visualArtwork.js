import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const VisualArtwork = ({frontmatter, html}) => (
  <div itemscope itemtype="http://schema.org/VisualArtwork" class="VisualArtwork">
    <figure>
      <img itemprop="image" src="/img/paintings-drawings/Ciana_Pullen-Yelling-2000-SAMPLE.JPG" alt="Yelling, Painting from 2001 by Ciana Pullen; Dimensions: 18 inches × 24 inches × 0 inch; Materials: India Ink and Gum Arabic on Vellum; Description:  © Ciana Pullen 2001" title="Yelling, Painting from 2001 by Ciana Pullen; Dimensions: 18 inches × 24 inches × 0 inch; Materials: India Ink and Gum Arabic on Vellum; Description:  © Ciana Pullen 2001"/>
      <br /><br />
      <figcaption>

        <strong itemprop="name">Yelling</strong>,
        <span class="artform" itemprop="artform">Painting</span>
        by
        <span itemprop="creator" itemscope itemtype="http://schema.org/Person">
                <span itemprop="name">Ciana Pullen</span>,
        </span>
        <span>
          <time itemprop="dateCreated" datetime="">
            2001.
          </time>
        </span>
        &nbsp;
        <span itemprop="artMedium">India Ink and Gum Arabic</span>
        on
        <span itemprop="artworkSurface">Vellum</span>,
        <span itemprop="width" itemscope itemtype="http://schema.org/Distance">18 inches</span> ×
          <span itemprop="height" itemscope itemtype="http://schema.org/Distance">24 inches</span> ×
          <span itemprop="depth" itemscope itemtype="http://schema.org/Distance">0 inch</span>.
          <br /><br />
          <p class="description">
            <em itemprop="description">

            </em>
          </p>
          <span class="copyrightholder" itemprop="copyrightHolder" itemscope itemtype="http://schema.org/Person">
              <span itemprop="name">Ciana Pullen</span>
          </span>
          <span class="copyrightyear" itemprop="copyrightYear">2001</span>
        </figcaption>
      </figure>
    </div>
  />
)
export default VisualArtwork
