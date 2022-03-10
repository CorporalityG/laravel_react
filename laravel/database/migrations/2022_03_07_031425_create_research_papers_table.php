<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResearchPapersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('research_papers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->default(0);
            $table->string('title');
            $table->string('slug')->unique();
            $table->mediumText('short_description')->nullable();
            $table->longText('description')->nullable();
            $table->string('image_file')->nullable();
            $table->enum('status', ['publish', 'draft', 'trash'])->default('publish');
            $table->string('meta_title')->nullable();
            $table->string('meta_keywords')->nullable();
            $table->text('meta_description')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('research_papers');
    }
}
