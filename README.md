# Chirpy Starter

[![Gem Version](https://img.shields.io/gem/v/jekyll-theme-chirpy)][gem]&nbsp;
[![GitHub license](https://img.shields.io/github/license/cotes2020/chirpy-starter.svg?color=blue)][mit]

When installing the [**Chirpy**][chirpy] theme through [RubyGems.org][gem], Jekyll can only read files in the folders
`_data`, `_layouts`, `_includes`, `_sass` and `assets`, as well as a small part of options of the `_config.yml` file
from the theme's gem. If you have ever installed this theme gem, you can use the command
`bundle info --path jekyll-theme-chirpy` to locate these files.

The Jekyll team claims that this is to leave the ball in the user’s court, but this also results in users not being
able to enjoy the out-of-the-box experience when using feature-rich themes.

To fully use all the features of **Chirpy**, you need to copy the other critical files from the theme's gem to your
Jekyll site. The following is a list of targets:

```shell
.
├── _config.yml
├── _plugins
├── _tabs
└── index.html
```

To save you time, and also in case you lose some files while copying, we extract those files/configurations of the
latest version of the **Chirpy** theme and the [CD][CD] workflow to here, so that you can start writing in minutes.

## Prerequisites

Follow the instructions in the [Jekyll Docs](https://jekyllrb.com/docs/installation/) to complete the installation of
the basic environment. [Git](https://git-scm.com/) also needs to be installed.

## Installation

Sign in to GitHub and [**use this template**][use-template] to generate a brand new repository and name it
`USERNAME.github.io`, where `USERNAME` represents your GitHub username.

Then clone it to your local machine and run:

```console
$ rvm install 3.3.4
$ bundle
```

## Usage
```console
bundle exec jekyll s
```

Please see the [theme's docs](https://github.com/cotes2020/jekyll-theme-chirpy#documentation).

## Creating Presentation Decks from Posts

This project includes support for creating reveal.js presentation decks based on blog posts. Decks are stored in the `demo_deck/` directory.

### How to Create a Deck

To create a presentation deck from a blog post, use the following prompt with an AI assistant (like Cursor AI):

```
can you create a deck-demo.html and update it to create a nice presentation based on the @_posts/[POST-FILENAME].md, please use reveal js to create the presentation. Save the file to demo_deck/[POST-DATE]-[POST-SLUG]/deck-demo.html. Please follow these best practices:
- Be concise: ensure all content fits within screen borders without overflow
- Use appropriate font sizes: text should be readable but not overflow the screen
- Break content into logical slides: each slide should focus on one topic
- Include visual elements: add images, icons, or diagrams to enhance understanding
- Ensure everything displays correctly: all content must be visible within the viewport
- Keep slides concise and make sure they don't go beyond the screen border
```

Replace:
- `[POST-FILENAME]` with the actual filename of your blog post (e.g., `2025-11-11-terraform-cert-1.md`)
- `[POST-DATE]` with the date from the filename (e.g., `2025-11-11`)
- `[POST-SLUG]` with the slug from the filename (e.g., `terraform-cert-1`)

### Example

For a post located at `_posts/2025-11-11-terraform-cert-1.md`, use:

```
can you create a deck-demo.html and update it to create a nice presentation based on the @_posts/2025-11-11-terraform-cert-1.md, please use reveal js to create the presentation. Save all the file created under demo_deck/2025-11-11-terraform-cert-1/ folder. Please follow these best practices:
- Be concise: ensure all content fits within screen borders without overflow
- Use appropriate font sizes: text should be readable but not overflow the screen
- Break content into logical slides: each slide should focus on one topic
- Include visual elements: add images, icons, or diagrams to enhance understanding
- Ensure everything displays correctly: all content must be visible within the viewport
- Keep slides concise and make sure they don't go beyond the screen border
```

### Deck Structure

The generated deck will:
- Use reveal.js for slide transitions and navigation
- Include all key content from the blog post
- Be optimized for screen display with appropriate font sizes
- Include images and visual elements where appropriate
- Be saved as `deck-demo.html` in the appropriate directory

### Best Practices

When creating decks:
1. **Be concise**: Ensure all content fits within screen borders
2. **Use appropriate font sizes**: Text should be readable but not overflow
3. **Break content into logical slides**: Each slide should focus on one topic
4. **Include visual elements**: Add images, icons, or diagrams to enhance understanding
5. **Test the presentation**: Open the HTML file in a browser to verify everything displays correctly

### Deck Location

Decks are typically stored in:
```
demo_deck/[POST-DATE]-[POST-SLUG]/deck-demo.html
```

For example:
```
demo_deck/2025-11-11-terraform-cert-1/deck-demo.html
```

## Contributing

The contents of this repository are automatically updated when new releases are made to the [main repository][chirpy].  
If you have problems using it, or would like to participate in improving it, please go to the main repository for feedback!

## License

This work is published under [MIT][mit] License.

[gem]: https://rubygems.org/gems/jekyll-theme-chirpy
[chirpy]: https://github.com/cotes2020/jekyll-theme-chirpy/
[use-template]: https://github.com/cotes2020/chirpy-starter/generate
[CD]: https://en.wikipedia.org/wiki/Continuous_deployment
[mit]: https://github.com/cotes2020/chirpy-starter/blob/master/LICENSE
