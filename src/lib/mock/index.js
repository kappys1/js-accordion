export const accordionStructure = `
  <dl id="accordion">
    <dt>Section 1</dt>
    <dd>
      <p>Section 1 Content...</p>
    </dd>
    <dt>Section 2</dt>
    <dd>
      <p>Section 2 Content...</p>
    </dd>
  </dl>
`

export const accordionStructureWithOutContent = `
<dl id="accordion">
  <dt>Section 1</dt>
  <dd>
    <p>Section 1 Content...</p>
  </dd>
  <dt>Section 1</dt>
</dl>
`
export const accordionStructureBadContent = `
<dl id="accordion">
  <dt>Section 1</dt>
  <div>
    <p>Section 1 Content...</p>
  </div>
</dl>
`

export const accordionBadStructure = `
<div id="accordion">
  <dt>Section 1</dt>
  <dd>
    <p>Section 1 Content...</p>
  </dd>
</div>
`
