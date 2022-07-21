<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectBudgetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('project_budgets', function (Blueprint $table) {
            $table->id();
            $table->string('service_name')->nullable();
            $table->string('duration')->nullable();
            $table->string('currency')->nullable();
            $table->json('price_grade_1')->nullable();
            $table->json('price_grade_2')->nullable();
            $table->json('price_grade_3')->nullable();
            $table->json('price_grade_4')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('project_budgets');
    }
}
