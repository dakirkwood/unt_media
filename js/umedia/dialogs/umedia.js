// JavaScript Document
CKEDITOR.dialog.add( 'umedia', function( editor ) {
    return {
        title: 'Edit UMedia',
        minWidth: 200,
        minHeight: 100,
        contents: [
            {
                id: 'info',
                elements: [
                    {
						id: 'media_source',
						type: 'text',
						label: '<strong>Media URL</strong>',
						width: '300px',
						setup: function( widget ) {
							this.setValue( widget.data.media_source );
						},
						commit: function( widget ) {

							widget.setData( 'media_source', this.getValue() );
						}
					}
                ]
            }
        ]
    };
} );