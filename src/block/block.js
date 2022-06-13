// Import Wordpress elements
import {
	useState,
	useEffect
   } from '@wordpress/element';

// Import Wordpress components
import {
	ToggleControl,
	FontSizePicker,
	PanelBody,
	SelectControl,
	RangeControl,
	ColorPicker,
	 __experimentalNumberControl as NumberControl
	} from '@wordpress/components';

// Import Wordpress Block Editors
import {
   InspectorControls, 
   AlignmentToolbar,
   RichText,
   useBlockProps    
} from '@wordpress/block-editor';

//  Import CSS Files
import './editor.scss';
import './style.scss';

const fallbackFontSize = 16;
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

//Created variables for providing default values of Title font-size
const fontSizes = [   
   {
	   name: ( 'Small' ),
	   slug: 'small',
	   size: 12,
   },
   {
	   name: ( 'Big' ),
	   slug: 'big',
	   size: 26,
   },
];

//Created variables for providing default values of Content font-size
const fontSizes2 = [
   {
	   name: ( 'Small' ),
	   slug: 'small',
	   size: 16,
   },
   {
	   name: ( 'Big' ),
	   slug: 'big',
	   size: 34,
   },
];

/**
* Register: aa Gutenberg Block.
*
* Registers a new block provided a unique name and an object defining its
* behavior. Once registered, the block is made editor as an option to any
* editor interface where blocks are implemented.
*
* @link https://wordpress.org/gutenberg/handbook/block-api/
* @param  {string}   name     Block name.
* @param  {Object}   settings Block settings.
* @return {?WPBlock}          The block, if it has been successfully
*                             registered; otherwise `undefined`.
*/
registerBlockType( 'cgb/block-advance-text-block', {
   // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
   title: __( 'advance-text-block - CGB Block' ), // Block title.
   icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
   category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
   keywords: [
	   __( 'advance-text-block — CGB Block' ),
	   __( 'CGB Example' ),
	   __( 'create-guten-block' ),
   ],
   attributes: { 
	   title: {
		   type: 'string',
		   selector: 'h1',
		 },
		 content: {
		   type: 'string',
		   selector: 'p',
		 },
		 alignment: {
		   type: 'string',
		   default: 'none',
	   },
	   alignment2: {
		   type: 'string',
		   default: 'none',
	   },
	   textColor:{
		   type: 'string',
	   },
	   textColor2:{
		   type: 'string',
	   },
	   fontWeight:{
		   type: 'number',
	   },
	   fontWeight2:{
		   type: 'number',
	   },
	   htmlTags: {
		   type: 'string',
		   selector: 'p',
	   },
	   titleSpace:{
		   type: 'number',
	   },
	   padding: {
		   type: 'number',
	   },
	   margin: {
		   type: 'number',
	   },
	   fontSize:{
		   type: 'number',
	   },
	   fontSize2:{
		   type: 'number',
	   },
	   borderRadiusTop:{
		   type: 'number',
	   },
	   toggleTitle:{
		   type: 'boolean',
		   value: true,
	   },
	   borderRadiusRight:{
		   type: 'number',
	   },
	   borderRadiusBottom:{
		   type: 'number',
	   },
	   borderRadiusLeft:{
		   type: 'number',
	   },
   },

   
   edit: ( {attributes, setAttributes} ) => {

	   //Created use states hooks for changing editor as per inspector controls 
	   const [ toggleTitle, setToggleTitle ] = useState( attributes.toggleTitle );
	   const [ fontSize, setFontSize ] = useState(attributes.fontSize);
	   const [ fontSize2, setFontSize2 ] = useState(attributes.fontSize2);
	   const [ textColor, setTextColor] = useState(attributes.textColor);
	   const [ textColor2, setTextColor2] = useState(attributes.textColor2);
	   const [ fontWeight, setFontWeight] = useState(attributes.fontWeight);
	   const [ fontWeight2, setFontWeight2] = useState(attributes.fontWeight2);
	   const [ htmlTags, setHtmlTags] = useState(attributes.htmlTags);
	   const [ titleSpace, setTitleSpace] = useState(attributes.titleSpace);
	   const [ padding, setPadding ] = useState( attributes.padding );
	   const [ margin, setMargin ] = useState( attributes.margin );
	   const [ title, setTitle ] = useState( attributes.title );		
	   const [ content, setContent ] = useState( attributes.content );
	   const [ borderRadiusTop, setborderRadiusTop ] = useState( attributes.borderRadiusTop );
	   const [ borderRadiusRight, setborderRadiusRight ] = useState( attributes.borderRadiusRight );
	   const [ borderRadiusBottom, setborderRadiusBottom ] = useState( attributes.borderRadiusBottom );	
	   const [ borderRadiusLeft, setBorderRadiusLeft ] = useState( attributes.borderRadiusLeft );

	   // Call useBlockProps for saving richtext's title content
	   const blockProps = useBlockProps();

	   // Call useBlockProps for saving richtext's content's content
	   const blockPropss = useBlockProps();

	   // Created function for Title's's alignment setting 
	   const onChangeAlignment2 = ( newAlignment2 ) => {
		   setAttributes( {
			   alignment2: newAlignment2 === undefined ? 'none' : newAlignment2,
		   } );
	   };

	   // Created function for Content's alignment setting 
	   const onChangeAlignment = ( newAlignment ) => {
		   setAttributes( {
		   alignment: newAlignment === undefined ? 'none' : newAlignment,
		   } );
	   };

	   // Using useEffect hooks for fetching data as per latest isnpector controls after page reloading
	   useEffect(() => {			
		   setAttributes( { "textColor": textColor } );
		   setAttributes( { "textColor2": textColor2 } );
		   setAttributes( { "fontWeight": fontWeight } );
		   setAttributes( { "fontWeight2": fontWeight2 } );
		   setAttributes( { "title": title } );
		   setAttributes( { "padding": padding } );
		   setAttributes( { "margin": margin } );
		   setAttributes( { "fontSize": fontSize } );
		   setAttributes( { "fontSize2": fontSize2 } );
		   setAttributes( { "titleSpace": titleSpace } );
		   setAttributes( { "htmlTags": htmlTags } );
		   setAttributes( { "content": content } );
		   setAttributes( { "borderRadiusTop": borderRadiusTop } );
		   setAttributes( { "borderRadiusRight": borderRadiusRight } );
		   setAttributes( { "borderRadiusBottom": borderRadiusBottom } );
		   setAttributes( { "borderRadiusLeft": borderRadiusLeft } );
		   setAttributes( { "toggleTitle": toggleTitle } );
	   }, [textColor, textColor2, fontWeight, fontWeight2, title, padding, margin, fontSize, fontSize2, titleSpace, htmlTags, content, borderRadiusTop, borderRadiusRight, borderRadiusBottom, borderRadiusLeft, toggleTitle] )

	   return (
   <div>
		  {
	  
		   <InspectorControls>
			   <PanelBody title={ __( 'User Controls' ) }>
				   
				   <br></br>

				   <PanelBody title={ __( 'Full page customization' ) }>
				   
					   <NumberControl
						   label="Padding"
						   isShiftStepEnabled={ true }
						   onChange={ (value) => setPadding(value)}
						   shiftStep={ 10 }
						   value={ padding }
					   />

					   <br></br> 

					   <NumberControl
						   label="Margin"
						   isShiftStepEnabled={ true }
	 					   onChange={ (value) => setMargin(value)}
						   shiftStep={ 10 }
						   value={ margin }
					   />	
					   
					   <br></br>
					   
						   <PanelBody title={ __( 'Border Radius customization' ) }>

							   <NumberControl
								   label="Border Radius Top Right"
								   isShiftStepEnabled={ true }
								   onChange={ (value) => setborderRadiusTop(value)}
								   shiftStep={ 10 }
								   value={ borderRadiusTop }
							   />

							   <NumberControl
								   label="Border Radius Bottom Right"
								   isShiftStepEnabled={ true }
								   onChange={ (value) => setborderRadiusRight(value)}
								   shiftStep={ 10 }
								   value={ borderRadiusRight }
							   />

							   <NumberControl
								   label="Border Radius Bottom Left "
								   isShiftStepEnabled={ true }
								   onChange={ (value) => setborderRadiusBottom(value)}
								   shiftStep={ 10 }
								   value={ borderRadiusBottom }
							   />

							   <NumberControl
								   label="Border Radius Top Left"
								   isShiftStepEnabled={ true }
								   onChange={ (value) => setBorderRadiusLeft(value)}
								   shiftStep={ 10 }
								   value={ borderRadiusLeft }
							   />
						   
						   </PanelBody>
				   </PanelBody>
 
				   <PanelBody title={ __( 'Title customization' ) }>

					   <ToggleControl
						   label="Enable Title"    
						   checked={ toggleTitle }
						   onChange={ () => { toggleTitle ? setToggleTitle( false ) : setToggleTitle( true ) } }
					   />
				   
						   { 
							   toggleTitle &&
								   <div>
						   
									   Alignments<br></br><br></br>

									   <AlignmentToolbar
										   value={ attributes.alignment2 }
										   onChange={ onChangeAlignment2 }
									   />

									   <br></br><br></br>Choose Text color

									   <ColorPicker
										   color={textColor2}
										   onChange={ ( value ) => setTextColor2( value )}
										   defaultValue="#000"
									   />

									   <FontSizePicker		
										   fontSizes={ fontSizes }
										   value={ fontSize }
										   fallbackFontSize={ fallbackFontSize }
										   onChange={ ( newFontSize ) => {
											   setFontSize( newFontSize );
										   } }
									   />

									   <RangeControl
										   label="Spacing"
										   value={ titleSpace }
										   onChange={ ( value ) => setTitleSpace( value ) }
										   min={ 15}
										   max={ 150}
									   />

									   <SelectControl
										   label="Title Styles"
										   value={ htmlTags }
										   options={ [
											   { label: 'h1', value: 'h1' },
											   { label: 'h2', value: 'h2' },
											   { label: 'h3', value: 'h3' },
											   { label: 'h4', value: 'h4' },
											   { label: 'h5', value: 'h5' },
											   { label: 'h6', value: 'h6' },
											   { label: 'div', value: 'div' },
											   { label: 'span', value: 'span' },
											   { label: 'p', value: 'p' },
												   ] }
										   onChange={ ( newHtmlTag ) => setHtmlTags( newHtmlTag ) }
									   />

									   <NumberControl	
										   label="Font Weight"
										   isShiftStepEnabled={ true }
										   onChange={ (value) => setFontWeight(value)}
										   shiftStep={ 10 }
										   value={ fontWeight }
									   />
								   </div>
							   }

				   </PanelBody>

				   <PanelBody title={ __( 'Content customization ' ) }>
				   
					   Alignments<br></br><br></br>

					   <AlignmentToolbar
						   value={ attributes.alignment }
						   onChange={ onChangeAlignment }
					   />

					   <br></br><br></br>Choose Text color

					   <ColorPicker
						   color={textColor}
						   onChange={ ( value ) => setTextColor( value )}
						   defaultValue="#000"
					   />

					   <FontSizePicker
						   fontSizes={ fontSizes2 }
						   value={ fontSize2 }
						   fallbackFontSize={ fallbackFontSize }
						   onChange={ ( newFontSize ) => setFontSize2( newFontSize )}
					   />

					   <NumberControl	
						   label="Font Weight"
						   isShiftStepEnabled={ true }
						   onChange={ (value) => setFontWeight2(value)}
						   shiftStep={ 10 }
						   value={ fontWeight2 }
					   />

				   </PanelBody>
			   </PanelBody>
		   </InspectorControls>

	   }

	   <div style={ { 
		   padding:padding+"px",
			margin:margin+"px",
			  borderBottomRightRadius:borderRadiusRight+"px",
		   borderTopRightRadius:borderRadiusTop+"px",
		   borderBottomLeftRadius:borderRadiusBottom+"px",
		   borderTopLeftRadius:borderRadiusLeft+"px"
				   } } className="myBorder">
	   
	   { 
		   toggleTitle &&
			   <RichText
			       { ...blockProps }
				   style={ { textAlign: attributes.alignment2, color: textColor2, fontSize:fontSize, fontWeight:fontWeight, marginBottom:titleSpace } }
				   tagName={htmlTags}
				   value={ title }
				   onChange={ (value) => setTitle(value) }
				   placeholder={ __( 'Add your block Title' ) }
			   />
	   }

	   <RichText
	       { ...blockPropss }
		   style={ { textAlign: attributes.alignment, color: textColor, fontSize:fontSize2, fontWeight:fontWeight2} }
		   tagName="p"
		   onChange={ (value) => setContent(value) }
		   value={ content }
		   placeholder={ __( 'Type to add content' ) }
	   />

	   </div>

   </div>

	   );

   },

   save: ( attributes ) => {		

	const blockProps = useBlockProps.save();
	const blockPropss = useBlockProps.save();

	return (
		
   		<div style={ { 
   			padding: attributes.padding+"px",
   			margin: attributes.margin+"px",
   			borderBottomRightRadius: attributes.borderRadiusRight+"px",
   			borderTopRightRadius: attributes.borderRadiusTop+"px",
   			borderBottomLeftRadius: attributes.borderRadiusBottom+"px",
   			borderTopLeftRadius: attributes.borderRadiusLeft+"px"
   					} } className="myBorder">
		  
   				<RichText.Content {...blockProps}
   					tagName={attributes.htmlTags}
   					value={ attributes.title }
   				/>
   
   		<RichText.Content {...blockPropss}
   			tagName="p"
   			value={ attributes.content }
   		/>
   
   		</div>
	   );
   },
} );
