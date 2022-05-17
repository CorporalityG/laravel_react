<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSectionSlugToArticleSectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('article_sections', function (Blueprint $table) {
            $table->after('section_title', function ($table)
            {
                $table->string('section_slug')->nullable();
            });
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('article_sections', function (Blueprint $table) {
            $table->dropColumn('section_slug');
        });
    }
}
