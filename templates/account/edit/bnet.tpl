<div class="account">
	<!-- IMPORT partials/account/header.tpl -->

	<form class="form-horizontal edit-form">
		<div class="control-group">
			<label class="control-label" for="selectMainCharacter">[[user:main_character]]</label>
			<div class="controls">
                <select class="form-control" name="selectMainCharacter" id="selectMainCharacter">
                    <!-- BEGIN characters -->
                        <option value="{characters.name}">{characters.name} ({characters.level})</option>
                    <!-- END characters -->
                </select>
				<input class="form-control" type="text"  id="selectMainCharacter" placeholder="[[user:main_character]]" value="{email}">
			</div>
		</div>

		<input type="hidden" name="uid" id="inputUID" value="{uid}" />

		<br/>
		<div class="form-actions">
			<a id="submitBtn" href="#" class="btn btn-primary btn-block"><i class="hide fa fa-spinner fa-spin"></i> [[user:save_changes]]</a>
		</div>
	</form>
</div>
