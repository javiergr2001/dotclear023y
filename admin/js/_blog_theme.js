'use strict';$(()=>{$('.module-sshot').not('.current-theme .module-sshot').each(function(){$(this).children('img').on('click',function(){const details_element=$(this).parent().parent().children('details');details_element.attr('open',details_element.attr('open')?null:'true');});});$('div.modules-search form input[type=submit]').on('click',function(){const mlen=$('input[name=m_search]',$(this).parent()).val();return mlen.length>2?true:false;});$('.checkboxes-helpers').each(function(){dotclear.checkboxesHelpers(this);});$('.modules-form-actions').each(function(){const rxActionType=/^[^\[]+/;const rxActionValue=/([^\[]+)\]$/;const checkboxes=$(this).find('input[type=checkbox]');$('input[type=submit]',this).on('click',function(){const keyword=$(this).attr('name');if(!keyword){return true;}
const maction=keyword.match(rxActionType);const action=maction[0];const mvalues=keyword.match(rxActionValue);if(!mvalues){let checked=false;if(checkboxes.length>0){$(checkboxes).each(function(){if(this.checked){checked=true;}});if(!checked){return false;}}
if(action=='delete'){return window.confirm(dotclear.msg.confirm_delete_themes);}}else{const module=mvalues[1];if(action=='delete'){return window.confirm(dotclear.msg.confirm_delete_theme.replace('%s',module));}}
return true;});});});