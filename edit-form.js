var EditForm = (function initEditForm() {

	function renderEditForm() {
		var formContainer = $('<div id="emptyForm" class="changeDiv hide"></div>');
		var editForm = $('<form class="editForm"></form>');
		var dayHeader = createDayHeader();
		var subHeader = createSubHeader();
		var empty = createEmptyParagraph();
		var closeButton = createCloseButton();
		var editButton = createEditButton();
		var removeButton = createRemoveButton();
		$('body').append(formContainer);
		$('[class="changeDiv"]').append(editForm);
		$('[class="editForm"]').append(dayHeader);
		$('[class="editForm"]').append(subHeader);
		$('[class="editForm"]').append(empty);
		$('[class="editForm"]').append(closeButton);
		$('[class="editForm"]').append(editButton);
		$('[class="editForm"]').append(removeButton);
	}

	function createDayHeader() {
		var header = ('<h1 class="header">' + Model.convertMonthNumberToString(Model.getMonth()) + ' ' + Model.getYear() + '</h1>');
		return header;
	}

	function createSubHeader() {
		var subTitle = ('<h3 class="sub-header">YOUR FULL DAY EVENT</h3>');
		return subTitle;
	}

	function createEmptyParagraph() {
		var emptyParagraph = ('<p class="emptyParagraph"></p>');
		return emptyParagraph;
	}

	function createCloseButton() {
		var firstButton = ('<button data-close-button value="close" class="closeButton">Close</button>');
		return firstButton;
	}

	function createEditButton() {
		var secondButton = ('<button data-close-button value="edit" class="editButton">Edit</button>');
		return secondButton;
	}

	function createRemoveButton() {
		var thirdButton = ('<button data-remove-button value="remove" class="removeButton">Remove</button>');
		return thirdButton;
	}

	return {
		renderEditForm: renderEditForm,
		createDayHeader: createDayHeader,
		createSubHeader: createSubHeader,
		createEmptyParagraph: createEmptyParagraph,
		createCloseButton: createCloseButton,
		createEditButton: createEditButton,
		createRemoveButton: createRemoveButton
	};
})();