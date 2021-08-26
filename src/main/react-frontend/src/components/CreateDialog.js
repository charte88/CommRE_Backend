class CreateDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const newProperty = {};
        this.props.attributes.forEach(attribute => {
            newProperty[attribute] = ReactDOM.findDOMNode(this.refs[attribute]).value.trim();
        });
        this.props.onCreate(newProperty);

        // Clear out the dialog's inputs
        this.props.attributes.forEach(attribute => {
            ReactDOM.findDOMNode(this.refs[attribute]).value = '';
        })

        // Navigate away from the dialog to hide it
        window.location = "#";
    }

    render() {
        const inputs = this.props.attributes.map(attribute => <p key={attribute}>
            <input type="text" placeholder={attribute} ref= {attribute} className="field"/> </p>
        );

        return (
            <div>
                <a href="#createProperty">Create</a>
                <div id="createProperty" className="modalDialog">
                    <div>
                        <a href="#" title="Close" className="close">X</a>
                        <h2> Create new property</h2>
                        <form>
                            {inputs}
                            <button onClick={this.handleSubmit}>Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}