# Obsidian TickTick for macOS

[TickTick](https://ticktick.com/home) integration for [Obsidian](https://obsidian.md) for macOS

**Note:** This plugin is still in early alpha and is subject to change at any time!

Currently, this plugin works with [TickTick for Mac](https://ticktick.com/about/mac) since it depends on [iOS-URL-Scheme](https://support.ticktick.com/hc/en-us/articles/360007930051-TickTick-iOS-URL-Scheme)

## Features

<table>
<thead>
<tr>
<th>Feature</th>
<th>Screenshot</th>
</tr>
</thead>
<tr>

<tr>
<td>
<b>Create a task of the current page</b> (default: <kbd>Command</kbd> + <kbd>t</kbd>)
<ul>
<li>Obsidian page link is added in the desctiption</li>
</ul>
</td>
<td>
<img src="./docs/create-new-task.png" width="400px" />
</td>
</tr>

</table>

## Feature Possibility

- Support Windows
  - Option 1) Use the official API | [TickTick Developer](https://developer.ticktick.com/docs#/openapi)
    - I need to consider where to save the access token | [A place for Plugin's sensitive data? - Developers & API - Obsidian Forum](https://forum.obsidian.md/t/a-place-for-plugins-sensitive-data/18308)
  - Option 2) Use the URL Scheme for Windows the same as macOS
    - TickTick doesn't seem to provide it
  - Option 3) Use URL query of Web like `https://ticktick.com/webapp/task/add?title=...`
    - (Maybe) TickTick doesn't seem to provide it
  - Option 4) Use API endpoint directly
    - [lazeroffmichael/ticktick-py: Unofficial TickTick API](https://github.com/lazeroffmichael/ticktick-py)
    - [timoth-y/obsidian-ticktick: 🔄 Sync Obsidian checklists with TickTick so you wont forget a thing!](https://github.com/timoth-y/obsidian-ticktick)
