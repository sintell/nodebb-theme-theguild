<div class="account">
	<!-- IMPORT partials/account/header.tpl -->

	<form class="form-horizontal edit-form">
		<div class="control-group">
			<label class="control-label" for="selectMainCharacter">[[user:main_character]]</label>
			<div class="controls">
                <select class="form-control" name="selectMainCharacter" id="inputNewUsername">
                    <!-- BEGIN characters -->
                        <option value="{characters.name}"
                                <!-- IF characters.isMain -->selected='selected'<!-- ENDIF characters.isMain -->>
                                {characters.name} ({characters.class.name})
                        </option>
                    <!-- END characters -->
                </select>
			</div>
		</div>

		<div class="control-group">
			<label class="control-label" for="inputNewEmail">[[user:email]]</label>
			<div class="controls">
				<input class="form-control" type="text" id="inputNewEmail" placeholder="[[user:email]]" value="{email}">
			</div>
		</div>


		<!-- disables autocomplete on FF --><input type="password" style="display:none">

		<!-- IF isSelf -->
		<div class="control-group">
			<label class="control-label" for="inputCurrentPassword">[[user:current_password]]</label>
			<div class="controls">
				<input autocomplete="off" class="form-control" type="password" id="inputCurrentPassword" placeholder="[[user:current_password]]" value=""<!-- IF !hasPassword --> disabled<!-- ENDIF !hasPassword -->>
			</div>
		</div>
		<!-- ENDIF isSelf -->


		<input type="hidden" name="uid" id="inputUID" value="{uid}" />

		<br/>
		<div class="form-actions">
			<a id="submitBtn" href="#" class="btn btn-primary btn-block"><i class="hide fa fa-spinner fa-spin"></i> [[user:change_bnet_account]]</a>
		</div>
	</form>
</div>
